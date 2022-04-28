import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeloneButtonComponent } from './telone-button.component';

describe('TeloneButtonComponent', () => {
  let component: TeloneButtonComponent;
  let fixture: ComponentFixture<TeloneButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeloneButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeloneButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
