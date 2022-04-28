import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API, DefaultService } from '@front-application/core';

import { Permissions } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService extends DefaultService<Permissions> {


  constructor(httpClient: HttpClient) {
    super(httpClient, `${API.USERACCOUNTS}v1`);
  }
}
