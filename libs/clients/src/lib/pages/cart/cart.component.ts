import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from '../../clients-services/cart.service';
import { CustomerService } from '../../clients-services/customer.service';
import { PaymentMethodComponent } from '../../components/payment-method/payment-method.component';
import {Customer} from "../../models/customer";
import {Cart, MotorVehicleLineItem} from "../../models/cart";
import {API} from "@front-application/core";
import {Quotes} from "../../models";
import {NewcartService} from "../../clients-services/newcart.service";

@Component({
  selector: 'front-application-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public products: Array<any> = [];
  public cartItems: Array<MotorVehicleLineItem>=[];
  public grandTotal!: number;
  public customerId: any;
  public cartDetails: Cart;

  constructor(private cartService: CartService,
              private cartService2: NewcartService,
              private dialog: MatDialog, private customerService : CustomerService) {}

  ngOnInit(): void {
      this.getCartItems()
    }

  getCartItems() {
    const user = JSON.parse(sessionStorage.getItem('user') ?? '{}');
    const customerId = user.id
    this.cartService.getFromUrl(`v1/cart/by-customer/${customerId}`).subscribe({
      next: (res) => {
        this.cartItems = res.motorVehicleLineItems;
        this.cartDetails = res;
      },
    });
  }

  checkout() {
    const dialogRef = this.dialog.open(PaymentMethodComponent, {
      disableClose: true,
      width: '25%',
      data: {
        showPhoneNumberInput: true,
        cartId: this.cartDetails.id

      },
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.ngOnInit();
      }
    });
  }

  clearCart() {
    this.cartService.delete(`v1/cart/delete-cart/${this.cartDetails.id}`).subscribe({
      next: (res) => {
        this.ngOnInit();
      }
    })
  }

  deleteItemInCart(itemId: string){
    this.cartService.updateToUrl(`v1/cart/remove-from-cart/${this.cartDetails.id}/${itemId}`, {}).subscribe({
      next: (res) => {
        console.log(res)
        this.ngOnInit();
      }
    })
  }
}
