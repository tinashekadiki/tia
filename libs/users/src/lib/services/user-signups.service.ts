import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API, DefaultService } from '@front-application/core';
import { Users } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserSignupService extends DefaultService<Users> {
  constructor(httpClient: HttpClient) {
    super(httpClient, `${API.USERACCOUNTS}v2`);

  }
}
