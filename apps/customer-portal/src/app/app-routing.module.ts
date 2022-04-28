import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { CustomerContainerComponent } from 'libs/layouts/src/lib/components/customer-container/customer-container.component';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries

const routes: Routes = [
  {
    path: 'auth',
    // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
    loadChildren: () => import('@front-application/auth').then((a) => a.AuthModule),
  },

  // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
  { path: 'welcome', loadChildren: () => import('../../../telone-insurance/src/app/pages/welcome-pages.module').then(m => m.WelcomePagesModule), },

  {
    path: '',
    // component: CustomerContainerComponent,
    // canActivateChild: [],
    // data: { roles: [ROLES.CUSTOMER,] },
    children: [
        // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries

  { path: '', loadChildren: () => import('@front-application/clients').then(m => m.ClientsModule), },

        // {
        //   path: 'client',
        //   // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
        //   loadChildren: () => import('@front-application/clients').then((a) => a.ClientsModule),
        // },
        {
          path: 'client',
          // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
          loadChildren: () => import('@front-application/clients').then((a) => a.ClientsModule),
        },
        { path: '', redirectTo: '/client', pathMatch: 'full' },


    ]
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
