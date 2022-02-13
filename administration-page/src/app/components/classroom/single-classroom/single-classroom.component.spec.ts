import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleClassroomComponent } from './single-classroom.component';

describe('SingleClassroomComponent', () => {
  let component: SingleClassroomComponent;
  let fixture: ComponentFixture<SingleClassroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleClassroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
