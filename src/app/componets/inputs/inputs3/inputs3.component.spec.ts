import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inputs3Component } from './inputs3.component';

describe('Inputs3Component', () => {
  let component: Inputs3Component;
  let fixture: ComponentFixture<Inputs3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Inputs3Component]
    });
    fixture = TestBed.createComponent(Inputs3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
