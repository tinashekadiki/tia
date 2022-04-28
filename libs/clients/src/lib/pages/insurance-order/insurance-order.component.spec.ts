import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceOrderComponent } from './insurance-order.component';

describe('InsuranceOrderComponent', () => {
  let component: InsuranceOrderComponent;
  let fixture: ComponentFixture<InsuranceOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
