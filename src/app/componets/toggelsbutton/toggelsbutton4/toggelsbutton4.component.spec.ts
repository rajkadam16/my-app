import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Toggelsbutton4Component } from './toggelsbutton4.component';

describe('Toggelsbutton4Component', () => {
  let component: Toggelsbutton4Component;
  let fixture: ComponentFixture<Toggelsbutton4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Toggelsbutton4Component]
    });
    fixture = TestBed.createComponent(Toggelsbutton4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
