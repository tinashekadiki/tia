import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomerAssetComponent } from './create-customer-asset.component';

describe('CreateCustomerAssetComponent', () => {
  let component: CreateCustomerAssetComponent;
  let fixture: ComponentFixture<CreateCustomerAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCustomerAssetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCustomerAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
