import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productdetailes1Component } from './productdetailes1.component';

describe('Productdetailes1Component', () => {
  let component: Productdetailes1Component;
  let fixture: ComponentFixture<Productdetailes1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Productdetailes1Component]
    });
    fixture = TestBed.createComponent(Productdetailes1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
