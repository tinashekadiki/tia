import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';
import { ContainerComponent } from "./pages/container/container.component";
import { CreateAccountComponent } from "./pages/create-account/create-account.component";

const routes: Routes = [

    {

      path: '',
      component: ContainerComponent,
      children: [

        {path: '', pathMatch: 'full', redirectTo: 'login' },
        { path: 'login', component: LoginComponent },
        { path: 'forgot-password', component: ForgotPasswordComponent },
        { path: 'create-account', component: CreateAccountComponent},
        { path: '**', redirectTo: 'login' }
      ]
    }
    ];

    @NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(routes)
        ]
    })

    export class AuthRoutingModule {

    }
