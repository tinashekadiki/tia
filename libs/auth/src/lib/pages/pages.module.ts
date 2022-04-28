import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {ContainerComponent} from './container/container.component';
import {RouterModule} from "@angular/router";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {FlexModule} from "@angular/flex-layout";
import {AngularMaterialModule} from "../angular-material.module";
import {ReactiveFormsModule} from '@angular/forms';
import {AuthComponentsModule} from "../components/auth-components-module";
import {MatDialogModule} from "@angular/material/dialog";
import {
  WelcomeComponentsModule
} from "../../../../../apps/telone-insurance/src/app/components/welcome-components.module";

import {OtpComponent} from "../components/otp/otp.component";
import {AuthModule} from "@front-application/auth";
import {NgOtpInputModule} from "ng-otp-input";

@NgModule({
  declarations: [
    ContainerComponent,
    OtpComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    FlexModule,
    AngularMaterialModule,
    WelcomeComponentsModule,
    AuthComponentsModule,
    MatDialogModule,
    ReactiveFormsModule,
    AuthModule,
    NgOtpInputModule
  ],

  exports: [

  ]
})
export class PagesModule { }
