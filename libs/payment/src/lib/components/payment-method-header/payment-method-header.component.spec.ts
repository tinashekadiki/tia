import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMethodHeaderComponent } from './payment-method-header.component';

describe('PaymentMethodHeaderComponent', () => {
  let component: PaymentMethodHeaderComponent;
  let fixture: ComponentFixture<PaymentMethodHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentMethodHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMethodHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
