import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '@front-application/core';

@Component({
  selector: 'front-application-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  constructor(private guard: AuthGuard) {}

  ngOnInit(): void {
    const token = sessionStorage.getItem('token');
    if (token?.length != null) {
      this.guard.service.saveUser();
    }
  }
}
