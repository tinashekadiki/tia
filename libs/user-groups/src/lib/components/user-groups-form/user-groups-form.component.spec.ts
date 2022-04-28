import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGroupsFormComponent } from './user-groups-form.component';

describe('UserGroupsFormComponent', () => {
  let component: UserGroupsFormComponent;
  let fixture: ComponentFixture<UserGroupsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGroupsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGroupsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
