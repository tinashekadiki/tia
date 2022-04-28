import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentMethodFacade } from '../../+state/payment-method/payment-method.facade';
import { CreatePaymentMethodhComponent } from '../../components/create-payment-methodh/create-payment-methodh.component';
import { PaymentMethodFormComponent } from '../../components/payment-method-form/payment-method-form.component';
import { PaymentMethod } from '../../models';

@Component({
  selector: 'front-application-payment-method-page',
  templateUrl: './payment-method-page.component.html',
  styleUrls: ['./payment-method-page.component.scss']
})
export class PaymentMethodPageComponent implements OnInit {
  selectedPaymentMethod: PaymentMethod[];

  constructor(
    public paymentMethodFacade: PaymentMethodFacade,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getPaymentMethod(0, 10);
  }

  public getPaymentMethod(page: number, pageSize: number) {
    const filters = { pageNumber: page, pageSize };
    this.paymentMethodFacade.getPaginatedPaymentMethod(filters);
    console.log(filters)
  }

  public showAddMethodDialog() {
    const dialogRef = this.dialog.open(CreatePaymentMethodhComponent, {disableClose: true,
      width: '50%'
  });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.getPaymentMethod(0, 10);
      }
    });
  }

  createPaymentMethod() {
    this.router.navigate(['./payment-method'], {
      relativeTo: this.route,
    });
  }


  showAddPaymentMethodDialog() {
    const dialogRef = this.dialog.open(PaymentMethodFormComponent,
      {
        width: '800px',
        disableClose: true,
      });
    dialogRef.afterClosed().subscribe((res) => {
      
      if (res) {
        
        this.getPaymentMethod(0, 10);
      }
    });
  }

}
