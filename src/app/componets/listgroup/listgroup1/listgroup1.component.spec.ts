import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listgroup1Component } from './listgroup1.component';

describe('Listgroup1Component', () => {
  let component: Listgroup1Component;
  let fixture: ComponentFixture<Listgroup1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Listgroup1Component]
    });
    fixture = TestBed.createComponent(Listgroup1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
