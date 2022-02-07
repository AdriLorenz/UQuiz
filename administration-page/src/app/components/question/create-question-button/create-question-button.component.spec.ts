import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuestionButtonComponent } from './create-question-button.component';

describe('CreateQuestionButtonComponent', () => {
  let component: CreateQuestionButtonComponent;
  let fixture: ComponentFixture<CreateQuestionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateQuestionButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuestionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
