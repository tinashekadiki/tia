import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurerDashboardComponent } from './insurer-dashboard.component';

describe('InsurerDashboardComponent', () => {
  let component: InsurerDashboardComponent;
  let fixture: ComponentFixture<InsurerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurerDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
