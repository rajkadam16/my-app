import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sideswiper1Component } from './sideswiper1.component';

describe('Sideswiper1Component', () => {
  let component: Sideswiper1Component;
  let fixture: ComponentFixture<Sideswiper1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sideswiper1Component]
    });
    fixture = TestBed.createComponent(Sideswiper1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
