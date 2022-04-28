import { PERMISSIONS } from '../data/permissions.data';

export interface TokenPayload {
    aud: string[];
    user_name: string;
    scope: string[];
    userAccountId: number;
    tenantId?: any;
    isAdmin: boolean;
    exp: number;
    authorities: PERMISSIONS[];
    jti: string;
    email: string;
    client_id: string;
}