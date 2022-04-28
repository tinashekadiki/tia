import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurerDetailsComponent } from './insurer-details.component';

describe('InsurerDetailsComponent', () => {
  let component: InsurerDetailsComponent;
  let fixture: ComponentFixture<InsurerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
