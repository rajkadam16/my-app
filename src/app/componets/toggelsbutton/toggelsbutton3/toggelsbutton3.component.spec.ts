import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Toggelsbutton3Component } from './toggelsbutton3.component';

describe('Toggelsbutton3Component', () => {
  let component: Toggelsbutton3Component;
  let fixture: ComponentFixture<Toggelsbutton3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Toggelsbutton3Component]
    });
    fixture = TestBed.createComponent(Toggelsbutton3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
