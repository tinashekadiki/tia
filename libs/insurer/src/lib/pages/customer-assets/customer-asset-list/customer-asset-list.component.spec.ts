import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAssetListComponent } from './customer-asset-list.component';

describe('CustomerAssetListComponent', () => {
  let component: CustomerAssetListComponent;
  let fixture: ComponentFixture<CustomerAssetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAssetListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAssetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
