import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DOCUMENT } from '@angular/common';
import { AuthService } from '.';
import { Result } from '../models/result';

@Injectable()
export class RequestHandler {
    public base: string;
    public domain: string;
    loader: HTMLElement;
    requests: number[] = [];
    constructor(public _http: HttpClient,
        @Inject("BASE_URL") base: string,
        @Inject(DOCUMENT) document: any,
        private message: NzMessageService) {
        this.domain = base;
        this.base = base + 'api/';
        this.loader = document.getElementById('loader');
        // this.loader.style.display;
    }

    setLoader(display: string) {
        let document: any
        this.loader = document.getElementById('loader');
        this.loader.style.display = display;
    }

    public get<T>(url: string, func: any, error?: any): Observable<Result<T>> {
        return this.execute(this._http.get<Result<T>>(this.base + url, this.getOptions()), func, error);
    }

    public post<T>(url: string, data: any, func: any, error?: any): void {
        this.execute(this._http.post<Result<T>>(this.base + url, data, this.getOptions()), func, error);
    }

    public postProgress<T>(url: string, data: any, func: any, error?: any): void {
        this.executeProgress(this._http.post<Result<T>>(this.base + url, data, this.getOptions()), func, error);
    }

    public update<T>(url: string, data: any, func: any, error?: any): void {
        this.execute(this._http.put<Result<T>>(this.base + url, data, this.getOptions()), func, error);
    }

    public delete<T>(url: string, func: any, error?: any): void {
        this.execute(this._http.delete<Result<T>>(this.base + url, this.getOptions()), func, error);
    }

    public media<T>(url: string, data: any, func: any, error?: any): void {
        this.execute(this._http.post<Result<T>>(this.base + url, data, this.getMediaOptions()), func, error);
    }

    private executeProgress<T>(action: Observable<Result<T>>, func: any, error?: any): any {
        this.addRequest();
        action.subscribe((res: Result<T>) => {
            if (!res.succeeded)
                // this.message.warning(res.message);
            func(res);
            this.removeRequest();
        }, (e: Error) => {
            this.removeRequest();
        });
    }

    private execute<T>(action: Observable<Result<T>>, func: any, error?: any): any {
        this.addRequest();
        action.subscribe((res: Result<T>) => {
            if (!res.succeeded)
                // this.message.warning(res.message);
            func(res);
            this.removeRequest();
        }, (e: Error) => {
            this.removeRequest();
            if (error) error(e);
            else
                this.message.error('<br/><br/><h6><b>Unexpected Server Response</b></h6><p>Please <a href="mailto:support@bronobulk.co.zw">CONTACT</a> the administrator for assistance</p>')
        });
    }

    private getOptions() {
        return this.getOption('application/json');
    }

    private getMediaOptions() {
        console.log(AuthService.getToken());
        return {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + AuthService.getToken()
            })
        };
    }

    private getOption(content: string) {
        console.log(AuthService.getToken());
        return {
            headers: new HttpHeaders({
                'Content-Type': content,
                'Authorization': 'Bearer ' + AuthService.getToken()
            })
        };
    }

    private addRequest() {
        this.requests.push(1);
        this.setLoader('block');
    }

    private removeRequest() {
        this.requests.pop();
        if (this.requests.length > 0) return;
        this.setLoader('none');
    }
}
