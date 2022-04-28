import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerInsurerComponent } from './container-insurer.component';

describe('ContainerInsurerComponent', () => {
  let component: ContainerInsurerComponent;
  let fixture: ComponentFixture<ContainerInsurerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerInsurerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerInsurerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
