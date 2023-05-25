import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDeprecatedComponent } from './button-deprecated.component';

describe('ButtonDeprecatedComponent', () => {
  let component: ButtonDeprecatedComponent;
  let fixture: ComponentFixture<ButtonDeprecatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonDeprecatedComponent]
    });
    fixture = TestBed.createComponent(ButtonDeprecatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
