import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateThemeButtonComponent } from './create-theme-button.component';

describe('CreateThemeButtonComponent', () => {
  let component: CreateThemeButtonComponent;
  let fixture: ComponentFixture<CreateThemeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateThemeButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateThemeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
