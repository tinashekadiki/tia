import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentMethodComponent } from '../../components/payment-method/payment-method.component';

@Component({
  selector: 'front-application-payment-proceed',
  templateUrl: './payment-proceed.component.html',
  styleUrls: ['./payment-proceed.component.css'],
})
export class PaymentProceedComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    console.log('PaymentProceedComponent');
  }

  showPaymentDialog() {
    const dialogRef = this.dialog.open(PaymentMethodComponent, {
      disableClose: true,
      width: '25%',
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.ngOnInit();
      }
    });
  }
}
