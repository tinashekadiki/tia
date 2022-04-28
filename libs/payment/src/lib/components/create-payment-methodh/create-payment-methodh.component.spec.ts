import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePaymentMethodhComponent } from './create-payment-methodh.component';

describe('CreatePaymentMethodhComponent', () => {
  let component: CreatePaymentMethodhComponent;
  let fixture: ComponentFixture<CreatePaymentMethodhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePaymentMethodhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePaymentMethodhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
