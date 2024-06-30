import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTabComponent } from './dynamictab.component';

describe('Tab1Component', () => {
  let component: DynamicTabComponent;
  let fixture: ComponentFixture<DynamicTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicTabComponent]
    });
    fixture = TestBed.createComponent(DynamicTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
