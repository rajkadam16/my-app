import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Faqs2Component } from './faqs2.component';

describe('Faqs2Component', () => {
  let component: Faqs2Component;
  let fixture: ComponentFixture<Faqs2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Faqs2Component]
    });
    fixture = TestBed.createComponent(Faqs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
