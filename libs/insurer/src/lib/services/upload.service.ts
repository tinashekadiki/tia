import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import {API} from "@front-application/core";

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  constructor(private http: HttpClient) {}
  private baseUrl = 'http://192.168.10.91:8089';

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('csvFile', file);

    console.dir(formData);
    const user = JSON.parse(sessionStorage.getItem('user') ?? '{}');
    const insurerId = user.tenantId


    const req = new HttpRequest(
      'POST',
      `${API.QUOTE_AND_BUY}api/v1/motor-vehicle-quotations/create-by-csv/insurer/${insurerId}`,
      formData,
      {
        reportProgress: true,
        responseType: 'json',
      }
    );

    return this.http.request(req);
  }

  uploadLogo(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest(
      'POST',
      `${API.IMG_UPLOAD}v1/files/upload-file`,
      formData,
      {
        responseType: 'json',
      }
    );

    return this.http.request(req);
  }
}
