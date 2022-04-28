import { NgModule } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from "@angular/router";
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCarouselModule} from "@ngbmodule/material-carousel";
import {CommonModule} from "@angular/common";
import {WelcomeRoutingModule} from "./welcome-routing.module";
import {WelcomeComponentsModule} from "../../components/welcome-components.module";

@NgModule({
  imports: [
    WelcomeRoutingModule,
    MatIconModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCarouselModule,
    CommonModule,
    WelcomeComponentsModule
  ],
  declarations: [],
  exports: []
})
export class WelcomePagesModule { }
