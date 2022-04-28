// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {PERMISSIONS} from "@front-application/core";
import {NavItem} from "./nav-item";


export const menu: NavItem[] = [
  {
    displayName: 'Dashboard',
    iconName: 'dashboard',
    route: 'dashboard',
    permissions: [PERMISSIONS.ADMIN]
  },
  {
    displayName: 'Users',
    iconName: 'person',
    route: 'users',
    permissions: [PERMISSIONS.ADMIN]
  },
  {
    displayName: 'Insurer',
    iconName: 'person',
    route: 'insurer/list',
    permissions: [PERMISSIONS.ADMIN]
  },
  {
    displayName: 'Payment Method',
    iconName: 'money',
    route: 'payment',
    permissions: [PERMISSIONS.ADMIN]
  },
  {
    displayName: 'Group',
    iconName: 'group',
    route: 'user-groups',
    permissions: [PERMISSIONS.ADMIN],
  },
  {
    displayName: 'Agents',
    iconName: 'shopping_cart',
    route: 'agent/agent-list',
    permissions: [PERMISSIONS.ADMIN]
  }
];
export const agentMenu: NavItem[] = [
  {
    displayName: 'Dashboard',
    iconName: 'dashboard',
    route: 'dashboard',
    permissions: [PERMISSIONS.ADMIN]
  }, {
    displayName: 'Purchase',
    iconName: 'shopping_cart',
    route: 'agent/purchase',
    permissions: [PERMISSIONS.SERVICE_AGENT]
  },
  // {
  //   displayName: 'Retrieve',
  //   iconName: 'view_headline',
  //   route: 'agent/retrieve',
  //   permissions: [PERMISSIONS.SERVICE_AGENT]
  // },
  // {
  //   displayName: 'Print Certificates',
  //   iconName: 'print',
  //   route: 'agent/print',
  //   permissions: [PERMISSIONS.SERVICE_AGENT]
  // },

];
