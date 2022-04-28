import {
  NgModule,
  ModuleWithProviders,
  SkipSelf,
  Optional,
} from '@angular/core';

import { NxModule } from '@nrwl/angular';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { EnvironmentInterface, _environment } from './models';
import { JwtModule } from '@auth0/angular-jwt';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService, HTTPListener, HTTPStatus } from './services';
import { AuthGuard } from './guard';
import { FormComponent } from './shared/forms/form/form.component';


const ROUTER_STATE_KEY = 'router';

@NgModule({
    imports: [
      CommonModule,
      BrowserAnimationsModule,
      HttpClientModule,
      ReactiveFormsModule,
      NxModule.forRoot(),
      JwtModule.forRoot({
        config: { tokenGetter: token, skipWhenExpired: true }
      }),
      StoreModule.forRoot({ router: routerReducer }),
      EffectsModule.forRoot([]),
      StoreRouterConnectingModule.forRoot({ stateKey: ROUTER_STATE_KEY })
    ],
    providers:[
      AuthService,
      AuthGuard,  
      HTTPListener,
      HTTPStatus,
      NzNotificationService,
      { provide: HTTP_INTERCEPTORS, useClass: HTTPListener, multi: true },
    ],
    declarations: [
      FormComponent
    ]
  })
  export class CoreModule {
  
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
      throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
  
    static forRoot(config: EnvironmentInterface): ModuleWithProviders<CoreModule> {
      return {
        ngModule: CoreModule,
        providers: [
          {
            provide: _environment,
            useValue: config
          }
        ]
      };
    }
  }
  
  
  function throwIfAlreadyLoaded(parentModule: unknown, moduleName: string) {
    if (!parentModule) return;
    throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
  }
  
  export function token(): string {
    return AuthService.TOKEN;
  }
  