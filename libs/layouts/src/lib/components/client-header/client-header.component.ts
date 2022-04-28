import {Component, OnInit} from '@angular/core';
import {AuthGuard} from "@front-application/core";
import {CustomerService} from "../../../../../clients/src/lib/clients-services/customer.service";

@Component({
  selector: 'front-application-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.sass']
})
export class ClientHeaderComponent implements OnInit {
  customer: any;

  constructor(private guard: AuthGuard,
              private customerService: CustomerService) {
  }

  ngOnInit(): void {
    try {
      this.customerService.getCustomer().subscribe({
        next: (cust) => {
          this.customer = cust;
        },
        error: (err) => {
          console.warn(err);
          this.customer = {username: "Guest"}
        },
      });
    } catch (err) {
      this.customer = {username: "Guest"}
    }

    const token = sessionStorage.getItem('token');
    if (token?.length != null) {
      this.guard.service.saveUser();
    }
  }

}
