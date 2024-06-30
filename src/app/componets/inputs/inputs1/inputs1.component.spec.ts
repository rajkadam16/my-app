import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inputs1Component } from './inputs1.component';

describe('Inputs1Component', () => {
  let component: Inputs1Component;
  let fixture: ComponentFixture<Inputs1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Inputs1Component]
    });
    fixture = TestBed.createComponent(Inputs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
