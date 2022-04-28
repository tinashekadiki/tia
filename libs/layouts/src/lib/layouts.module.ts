import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPermissionsModule } from 'ngx-permissions';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

import { ContainerComponent } from './components/container/container.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SideMenuItemComponent } from './components/side-menu-item/side-menu-item.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from "@angular/flex-layout";
import { ContainerInsurerComponent } from './components/container-insurer/container-insurer.component';
import { CustomerContainerComponent } from './components/customer-container/customer-container.component';
import { MatCardModule } from '@angular/material/card';
import {ClientsModule} from "@front-application/clients";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgxPermissionsModule,
        MatToolbarModule,
        MatListModule,
        MatDialogModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatFormFieldModule,
        MatDividerModule,
        MatInputModule,
        MatSidenavModule,
        FlexModule,
        MatCardModule,
        ClientsModule
    ],
  declarations: [
    ContainerComponent,
    SideMenuComponent,
    SideMenuItemComponent,
    TopMenuComponent,
    FooterComponent,
    ContainerInsurerComponent,
    CustomerContainerComponent,
    // WelcomeFooterComponent,
    // ClientHeaderComponent
  ],
  exports: [SideMenuItemComponent
  ]
})
export class LayoutsModule {
}


