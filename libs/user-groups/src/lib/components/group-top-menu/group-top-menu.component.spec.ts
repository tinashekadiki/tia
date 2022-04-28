import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupTopMenuComponent } from './group-top-menu.component';

describe('GroupTopMenuComponent', () => {
  let component: GroupTopMenuComponent;
  let fixture: ComponentFixture<GroupTopMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupTopMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupTopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
