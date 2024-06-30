import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Toggelsbutton2Component } from './toggelsbutton2.component';

describe('Toggelsbutton2Component', () => {
  let component: Toggelsbutton2Component;
  let fixture: ComponentFixture<Toggelsbutton2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Toggelsbutton2Component]
    });
    fixture = TestBed.createComponent(Toggelsbutton2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
