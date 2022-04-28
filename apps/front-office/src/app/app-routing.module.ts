import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard, PERMISSIONS, ROLES} from '@front-application/core';
import {ContainerComponent} from '@front-application/layouts';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ContainerInsurerComponent } from 'libs/layouts/src/lib/components/container-insurer/container-insurer.component';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {SideMenuComponent} from "../../../../libs/layouts/src/lib/components/side-menu/side-menu.component";

const routes: Routes = [
  {
    path: 'auth',
    // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
    loadChildren: () => import('@front-application/auth').then((a) => a.AuthModule),
  },
  {
    path: 'client',
    // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
    loadChildren: () => import('@front-application/clients').then((a) => a.ClientsModule),
  },
  {
    path: '', component: ContainerInsurerComponent,
    canActivate: [AuthGuard],
    data: { roles: [ROLES.ROLE_INSURER_ADMIN,ROLES.SERVICE_AGENT] },
    children: [
      {
        path: 'user-groups',
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
      },
      {
        path: '',
        // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
        loadChildren: () => import('@front-application/insurer').then(m => m.InsurerModule),
      },
      {
        path: 'transactions',
        loadChildren: () => import('@front-application/payment-status').then(m => m.PaymentStatusModule),
        component: SideMenuComponent
      },
      {
        path: 'system-parameters',
        loadChildren: () => import('@front-application/payment-status').then(m => m.PaymentStatusModule),
      },
      { path: '', redirectTo: '/insurer', pathMatch: 'full' },

    ]
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
