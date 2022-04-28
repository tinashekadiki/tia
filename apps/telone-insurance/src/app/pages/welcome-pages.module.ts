import { NgModule } from '@angular/core';

import { WelcomeComponent } from './welcome/welcome.component';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from "@angular/router";
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { WelcomeContainerComponent } from './welcome-container/welcome-container.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCarouselModule} from "@ngbmodule/material-carousel";
import {CommonModule} from "@angular/common";
import {WelcomeComponentsModule} from "../components/welcome-components.module";
import {WelcomePagesRoutingModule} from "./welcome-pages-routing.module";

@NgModule({
  imports: [
    MatIconModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCarouselModule,
    CommonModule,
    WelcomeComponentsModule,
    WelcomePagesRoutingModule
  ],
  declarations: [WelcomeComponent, WelcomeContainerComponent, ],
  exports: [WelcomeComponent,]
})
export class WelcomePagesModule { }
