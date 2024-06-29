import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Toggelsbutton1Component } from './toggelsbutton1.component';

describe('Toggelsbutton1Component', () => {
  let component: Toggelsbutton1Component;
  let fixture: ComponentFixture<Toggelsbutton1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Toggelsbutton1Component]
    });
    fixture = TestBed.createComponent(Toggelsbutton1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
