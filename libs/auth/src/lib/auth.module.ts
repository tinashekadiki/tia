import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthGuard, AuthService } from '@front-application/core';
import { CommonModule } from '@angular/common';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { AuthHeaderComponent } from '../../../../apps/telone-insurance/src/app/components/auth-header/auth-header.component';
import { ForgotPasswordComponent } from './pages';
import { ContainerComponent } from './pages/container/container.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { LoginComponent } from './pages/login/login.component';
import { AngularMaterialModule } from './angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { PagesModule } from './pages/pages.module';
import { FlexModule } from "@angular/flex-layout";
import { NgOtpInputModule } from "ng-otp-input";

@NgModule({
  imports: [
    MatIconModule,
    MatDialogModule,
    CommonModule,
    RouterModule,
    AuthRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FlexModule,
    NgOtpInputModule,
  ],
    declarations: [
        LoginComponent,
        ForgotPasswordComponent,
        CreateAccountComponent,
        AuthHeaderComponent
    ],
    exports: [
        AuthHeaderComponent
    ],

    providers: [AuthService, AuthGuard]
})
export class AuthModule {}
