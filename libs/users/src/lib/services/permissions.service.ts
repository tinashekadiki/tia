import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API, DefaultService } from '@front-application/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Permissions } from 'libs/user-groups/src/lib/models';
import { Users } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService extends DefaultService<Permissions> {
  constructor(httpClient: HttpClient) {
    super(httpClient, `${API.USERACCOUNTS}v1`);
  }
}
