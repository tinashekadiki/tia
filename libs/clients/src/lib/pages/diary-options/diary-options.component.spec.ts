import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryOptionsComponent } from './diary-options.component';

describe('DiaryOptionsComponent', () => {
  let component: DiaryOptionsComponent;
  let fixture: ComponentFixture<DiaryOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaryOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
