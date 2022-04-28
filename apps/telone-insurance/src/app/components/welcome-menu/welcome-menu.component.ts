import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'front-application-welcome-menu',
  templateUrl: './welcome-menu.component.html',
  styleUrls: ['./welcome-menu.component.sass']
})
export class WelcomeMenuComponent {

  @Input() menuType: string | undefined;

  constructor(
    public router : Router
  ) {
  }

  ngOnInit(): void {

  }

  get menuToDisplay(): Array<any> {
    if (this.menuType === 'dashboard') {
      return [
        {
          name: 'Dashboard',
          link: '/'
        }, {
          name: 'Diary',
          link: '/client/registered-vehicles'
        }, {
          name: 'Payment History',
          link: '/client/payment-history'
        }, {
          name: 'Paid Receipts',
          link: '/client/history'
        }
      ]
    }
    else {
      return [
        {
          name: 'Home',
          link: '/welcome'
        }, {
          name: 'About',
          link: '/welcome'
        }, {
          name: 'Services',
          link: '/welcome'
        }, {
          name: 'Try it now',
          link: '/auth/create-account'
        }, {
          name: 'My account',
          link: '/auth/login'
        }
      ]
    }
  }
}
