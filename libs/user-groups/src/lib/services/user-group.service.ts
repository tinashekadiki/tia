import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserGroups } from '../models'
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { API, DefaultService } from '@front-application/core';

@Injectable({
  providedIn: 'root'
})
export class UserGroupService extends DefaultService<UserGroups>{

  constructor(httpClient: HttpClient) {
    super(httpClient, `${API.USERACCOUNTS}v2`);
  }
}
