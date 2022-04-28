// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {PERMISSIONS} from '@front-application/core';

export interface NavItem {
    displayName: string;
    disabled?: boolean;
    iconName: string;
    route?: string;
    children?: NavItem[];
    permissions?: PERMISSIONS[];
    routerLink?: string;
  }
