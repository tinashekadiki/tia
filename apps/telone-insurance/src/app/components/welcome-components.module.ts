import { NgModule } from '@angular/core';


import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from "@angular/router";
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCarouselModule} from "@ngbmodule/material-carousel";
import {CommonModule} from "@angular/common";
import {TeloneCenterComponent} from "./telone-center/telone-center.component";
import {WelcomeMenuComponent} from "./welcome-menu/welcome-menu.component";
import { WelcomeFooterComponent } from './welcome-footer/welcome-footer.component';

@NgModule({
  imports: [
    MatIconModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCarouselModule,
    CommonModule
  ],
  declarations: [TeloneCenterComponent,WelcomeMenuComponent, WelcomeFooterComponent],
  exports: [TeloneCenterComponent,WelcomeMenuComponent, WelcomeFooterComponent]
})
export class WelcomeComponentsModule { }
