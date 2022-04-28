import { NgModule } from '@angular/core';


import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from "@angular/router";
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCarouselModule} from "@ngbmodule/material-carousel";
import {CommonModule} from "@angular/common";
import { PasswordResetSuccessfulDialog } from './password-reset-successful/password-reset-successful.dialog';

@NgModule({
  imports: [
    MatIconModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCarouselModule,
    CommonModule,
    MatDialogModule
    
  ],
  declarations: [PasswordResetSuccessfulDialog],
  exports: [PasswordResetSuccessfulDialog]
})
export class AuthComponentsModule { }
