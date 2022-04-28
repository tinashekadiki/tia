import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API, DefaultService } from '@front-application/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Permissions } from 'libs/user-groups/src/lib/models';
import { Users } from '../models';
import { Roles } from '../models/roles';

@Injectable({
  providedIn: 'root'
})
export class RolesService extends DefaultService<Roles> {
  constructor(httpClient: HttpClient) {
    super(httpClient, `${API.USERACCOUNTS}v2`);
  }
}
