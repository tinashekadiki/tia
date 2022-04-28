import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentHistoryHeaderComponent } from './payment-history-header.component';

describe('PaymentHistoryHeaderComponent', () => {
  let component: PaymentHistoryHeaderComponent;
  let fixture: ComponentFixture<PaymentHistoryHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentHistoryHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentHistoryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
