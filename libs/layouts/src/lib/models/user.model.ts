export interface PermissionsAudit {
  lastModifiedDate: Date;
  lastModifiedBy?: any;
}

export interface RolesAudit {
  lastModifiedDate: Date;
  lastModifiedBy?: any;
}

export interface UserModel {
  id: number;
  username: string;
  active: boolean;
  blocked: boolean;
  lastLoginDate: Date;
  email: string;
  mobileNumber?: any;
  groups: any[];
  permissions: string[];
  roles: string[];
  accountOwner?: any;
  tenantId: string;
  groupsAudit?: any;
  permissionsAudit: PermissionsAudit;
  rolesAudit: RolesAudit;
}
