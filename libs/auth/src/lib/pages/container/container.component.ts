import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthGuard} from "@front-application/core";

@Component({
  selector: 'front-application-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.sass']
})
export class ContainerComponent{

  constructor(private router: Router, private guard: AuthGuard) {
    
  }
  // ngOnInit(): void {
  //   // this.guard.service.saveUser();
  // }

  showFooter(): boolean {
    return !this.router.url.includes("auth");
  }
}
