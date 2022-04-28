import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGroupUsersComponent } from './update-group-users.component';

describe('UpdateGroupUsersComponent', () => {
  let component: UpdateGroupUsersComponent;
  let fixture: ComponentFixture<UpdateGroupUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateGroupUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGroupUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
