import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClassroomButtonComponent } from './create-classroom-button.component';

describe('CreateClassroomButtonComponent', () => {
  let component: CreateClassroomButtonComponent;
  let fixture: ComponentFixture<CreateClassroomButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateClassroomButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClassroomButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
