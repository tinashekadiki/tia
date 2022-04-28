import { PERMISSIONS, ROLES } from "@front-application/core";
import { NavItem } from "./nav-item";



export const insurer: NavItem[] = [
  {
    displayName: 'Dashboard',
    iconName: 'dashboard',
    route: 'insurer',
    permissions: []

  },
  {
    displayName: 'Company Profile',
    iconName: 'content_copy',
    route: 'insurer/company-profile',
    permissions: []

  },
  {
    displayName: 'Customers',
    iconName: 'group',
    route: 'insurer/customers',
    permissions: []

  },

  {
    displayName: 'Users',
    iconName: 'person',
    route: 'users',
    permissions: []

  },
  {
    displayName: 'Packages',
    iconName: 'description',
    route: 'insurer/packages-list',
    permissions: []

  },


   {
    displayName: 'Group',
    iconName: 'group',
    route: 'user-groups',
    permissions: []

  },
  {
    displayName: 'System Parameters',
    iconName: 'settings',
    route: 'insurer/add-on',
    permissions: []
  },
];
