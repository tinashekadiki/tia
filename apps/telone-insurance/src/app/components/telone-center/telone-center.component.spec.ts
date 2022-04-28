import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeloneCenterComponent } from './telone-center.component';

describe('TeloneCenterComponent', () => {
  let component: TeloneCenterComponent;
  let fixture: ComponentFixture<TeloneCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeloneCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeloneCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
