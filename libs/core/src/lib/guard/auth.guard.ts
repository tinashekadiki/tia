import { Injectable, Injector } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, GuardsCheckEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { filter } from 'rxjs/operators';
import { InjectionVariable, INJECTIONVARIABLE, MenuItem } from '../models';
import { PERMISSIONS } from '../data/permissions.data';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable()
export class AuthGuard implements CanActivate {
  menus: any[] = [];

  constructor(public router: Router, public service: AuthService, private injector: Injector,
              private nzNotification: NzNotificationService) {
    router.events.pipe(filter(event => event instanceof GuardsCheckEnd))
      .subscribe((event) => {
        if (this.isAuthorized(event as GuardsCheckEnd)) return;
        this.router.navigateByUrl('/unauthorized');
      });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const url = state.url;
    if (!this.service.isAuthenticated() || !this.validateRoles(route.data['roles']))
      return this.router.createUrlTree(['/auth/login'], { queryParams: { returnUrl: url } });
    return true;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  const url = state.url;
  if (!this.service.isAuthenticated() )
    return this.router.createUrlTree(['/welcome'], { queryParams: { returnUrl: url } });
  return true;
}

  validateRoles(roles: PERMISSIONS[]): boolean {
    if (!roles) return true;
    const valid = roles.some(role => this.service.permissions.includes(role));
    console.log(roles)

    if (!valid)
      this.nzNotification.warning('Unauthorized Role', `This content authorised for : <b>${roles.join(', ')}</b>`,
        { nzAnimate: true, nzDuration: 10000 });
    return valid;
  }


  isAuthorized(event: GuardsCheckEnd) {
    const menu = this.findMenu(event.url);
    if (!menu || !menu.permissions) return true;
    return}

  findMenu(url: string): any {
    if (!this.menus) return null;
    return this.menus.find(m => url.includes(m.routerLink));
  }

}
