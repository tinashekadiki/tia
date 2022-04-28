import {Component, Input, OnInit} from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';
import {agentMenu, menu, NavItem} from '../../models';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {AuthGuard, AuthService} from "@front-application/core";

@Component({
  selector: 'front-application-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  public opened = true;
  private mediaWatcher: Subscription;
  public menu: NavItem[] = [];
  @Input() menuItems: NavItem[];

  constructor(
    private media: MediaObserver,
    private auth: AuthService
    ) {
    this.mediaWatcher = this.media.asObservable().pipe(
      filter((changes: MediaChange[]) => changes.length > 0),
      map((changes: MediaChange[]) => changes[0])
      )
      .subscribe((mediaChange: MediaChange) => {
        this.handleMediaChange(mediaChange);
      });
  }
  ngOnInit(): void {
    this.initialiseMenu();
    // this.menuItems = [...this.menuItems.filter(item => this.isPermitted(item))];
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
  isPermitted(menuItem: NavItem): boolean {
    return (menuItem.permissions && menuItem.permissions.length > 0) ?
      menuItem.permissions.some(permission => this.auth.permissions.includes(permission))
      : true;
  }

  private initialiseMenu() {
    try{
      console.log('initialiseMenu');
      const currentUser = this.auth.getUser();
      if(currentUser.roles.includes('ADMIN') || currentUser.roles.includes('TELONE_ADMIN')){
        this.menu = [
          ...menu
        ];
      }
      else if(currentUser.roles.includes('SERVICE_AGENT')){
        this.menu = [
          ...agentMenu
        ];
      }
    }
    catch (e) {
      setTimeout(() => this.initialiseMenu(), 1000);
    }

  }
}
