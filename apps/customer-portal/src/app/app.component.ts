import { Component, HostListener } from '@angular/core';
import { HTTPStatus, API, AuthService } from '@front-application/core';
// import { NgxPermissionsService } from 'ngx-permissions';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { Subject, Subscription, take, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'front-application-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'customer-portal';
  isCollapsed = false;
  HTTPActivity: boolean;
  idleTime = 1;
  unsubscribe$: Subject<void> = new Subject();
  countdown: Subscription;

  constructor(private httpStatus: HTTPStatus,
    private authService: AuthService, private jwtHelper: JwtHelperService, private http: HttpClient) {
    this.httpStatus.getHttpStatus().subscribe((status: boolean) => (this.HTTPActivity = status));
  }

  ngOnInit() {
     const token: any = this.authService.getToken();
    const decoded = this.jwtHelper.decodeToken(token);
    if (!decoded) return;
    // this.permissionsService.loadPermissions(decoded.authorities);
    this.loadUserActions()
  }

  loadUserActions() {
    this.resetTime();
    this.authService.getAction.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      if (this.countdown)
        this.countdown.unsubscribe();
      this.resetTime();
    });
  }

  @HostListener('document:mouseover', ['$event'])
  @HostListener('document:wheel', ['$event'])
  resetTimer() {
    this.authService.loadAction();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  resetTime(idleTime: number = this.idleTime) {
    const duration = idleTime * 300;
    this.countdown = timer(0, 1000).pipe(take(duration)).subscribe(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      value => { }, err => { }, () => {
        sessionStorage.clear();
        sessionStorage.setItem('refresh-session', 'true');
        location.href = `${window.location.origin}/welcome?returnUrl=${window.location.pathname}`;
      })
  }
}

