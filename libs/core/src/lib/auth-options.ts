import { InjectionToken } from '@angular/core';

export interface AuthenticationOptions {
  clientId: string;
  clientSecret: string;
}

export const AUTH_OPTIONS_INJECTION_TOKEN = new InjectionToken<AuthenticationOptions>('AuthenticationOptions');
