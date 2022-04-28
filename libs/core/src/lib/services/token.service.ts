import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  public setToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  public getToken(): string {
    return localStorage.getItem('access_token')  || '';
  }

  public clearToken() {
    localStorage.clear();
  }
}
