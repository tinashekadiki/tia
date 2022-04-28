import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeloneDashboardComponent } from './telone-dashboard.component';

describe('TeloneDashboardComponent', () => {
  let component: TeloneDashboardComponent;
  let fixture: ComponentFixture<TeloneDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeloneDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeloneDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
