import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, PERMISSIONS, ROLES } from '@front-application/core';
import { ContainerComponent } from '@front-application/layouts';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { SideMenuComponent } from "../../../../libs/layouts/src/lib/components/side-menu/side-menu.component";

const routes: Routes = [
  {
    path: 'auth',
    // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
    loadChildren: () => import('@front-application/auth').then((a) => a.AuthModule),
  },
  { path: 'welcome', loadChildren: () => import('./pages/welcome-pages.module').then(m => m.WelcomePagesModule), },
  {
    path: 'client',
    // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
    loadChildren: () => import('@front-application/clients').then((a) => a.ClientsModule),
  },
  {
    path: '', component: ContainerComponent,
    canActivate: [AuthGuard],
    data: { roles: [ROLES.ROLE_TELONE_ADMIN, ROLES.ROLE_ADMIN, ROLES.ROLE_SERVICE_AGENT] },
    children: [

      {
        path: 'payment',
        loadChildren: () => import('@front-application/payment').then(m => m.PaymentModule),

      },
      {
        path: 'user-groups',
        data: { permissions: [PERMISSIONS.SERVICE_AGENT] },
        loadChildren: () => import('@front-application/user-groups').then(m => m.UserGroupsModule)
      },
      {
        path: 'users',
        loadChildren: () => import('@front-application/users').then(m => m.UsersModule)
      },
      {
        path: 'insurer',
        // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
        loadChildren: () => import('@front-application/insurer').then(m => m.InsurerModule),
        data: { permissions: [PERMISSIONS.TELONE_ADMIN] }
      },
      {
        path: 'agent',
        // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
        loadChildren: () => import('@front-application/agent').then(m => m.AgentModule),
        data: { permissions: [PERMISSIONS.TELONE_ADMIN] }
      },
      {
        path: 'transactions',
        loadChildren: () => import('@front-application/payment-status').then(m => m.PaymentStatusModule),
        component: SideMenuComponent
      },
      {
        path: 'dashboard',
        loadChildren: () => import('@front-application/agent').then(m => m.AgentModule)
      },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },


    ]
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
