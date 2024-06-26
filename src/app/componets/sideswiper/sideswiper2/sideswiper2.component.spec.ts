import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sideswiper2Component } from './sideswiper2.component';

describe('Sideswiper2Component', () => {
  let component: Sideswiper2Component;
  let fixture: ComponentFixture<Sideswiper2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sideswiper2Component]
    });
    fixture = TestBed.createComponent(Sideswiper2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
