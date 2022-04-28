import { Component, Input, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { AuthGuard } from '@front-application/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { CustomerService } from 'libs/clients/src/lib/clients-services/customer.service';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { UsersService } from 'libs/users/src/lib/services/users.service';
import { Subscription, filter, map } from 'rxjs';
import { NavItem, menu } from '../../models';
import { insurer } from '../../models/insurer';
import {InsurerService} from "@front-application/insurer";

@Component({
  selector: 'front-application-container-insurer',
  templateUrl: './container-insurer.component.html',
  styleUrls: ['./container-insurer.component.scss'],
})
export class ContainerInsurerComponent implements OnInit {
  public opened = true;
  private mediaWatcher: Subscription;
  insurer: NavItem[] = insurer;
  user: any;
  insurerProfile: any;

  constructor(private userService: UsersService,
    private insurerService: InsurerService,
    private customerService: CustomerService,
    private media: MediaObserver,
    private guard: AuthGuard
  ) {
    this.mediaWatcher = this.media
      .asObservable()
      .pipe(
        filter((changes: MediaChange[]) => changes.length > 0),
        map((changes: MediaChange[]) => changes[0])
      )
      .subscribe((mediaChange: MediaChange) => {
        this.handleMediaChange(mediaChange);
      });
  }
  ngOnInit(): void {
    const token = sessionStorage.getItem('token');
    if (token?.length != null) {
      this.guard.service.saveUser();
      this.userService.getFromUrl('/user-accounts/me').subscribe((res) => {
        this.user = res;
      const insurerId = this.user.tenantId;
      this.insurerService
        .getFromUrl(`/insurers/${insurerId}`)
        .subscribe((res) => {
          this.insurerProfile = res;
          sessionStorage.setItem('primaryColor', res.primaryColor ?? 'blue');
          sessionStorage.setItem('secondaryColor', res.secondaryColor ?? 'blue');
        })
        });
    }
  }

  private handleMediaChange(mediaChange: MediaChange): void {
    if (this.media.isActive('lt-md')) {
      this.opened = false;
    } else {
      this.opened = true;
    }
  }

  ngOnDestroy(): void {
    this.mediaWatcher.unsubscribe();
  }

  signOut() {
      sessionStorage.clear();
      sessionStorage.setItem('refresh-session', 'true');
      location.href = window.location.origin;
    }
}
