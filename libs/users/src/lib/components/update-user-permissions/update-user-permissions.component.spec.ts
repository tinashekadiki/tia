import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserPermissionsComponent } from './update-user-permissions.component';

describe('UpdateUserPermissionsComponent', () => {
  let component: UpdateUserPermissionsComponent;
  let fixture: ComponentFixture<UpdateUserPermissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUserPermissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
