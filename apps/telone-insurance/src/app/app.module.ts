import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  CoreModule,
  UiLoader
} from '@front-application/core';
import {LayoutsModule} from '@front-application/layouts';
import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {IconsProviderModule} from './icons-provider.module';
import {FlexLayoutModule} from "@angular/flex-layout";
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { NgxPermissionsModule } from 'ngx-permissions';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule.forRoot({ environment: environment.baseUrl, production: environment.production }),
    LayoutsModule,
    FormsModule,
    NgxPermissionsModule.forRoot(),
    HttpClientModule,
    IconsProviderModule,
    FlexLayoutModule,
     NgxUiLoaderModule.forRoot(UiLoader.load()),
    NgxUiLoaderHttpModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
