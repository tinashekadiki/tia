import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreModule, UiLoader } from '@front-application/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutsModule } from '@front-application/layouts';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { AppRoutingModule } from './app-routing.module';
// import { IconsProviderModule } from './icons-provider.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule.forRoot({ environment: environment.baseUrl, production: environment.production }),
    LayoutsModule,
    FormsModule,
    HttpClientModule,
    // IconsProviderModule,
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
