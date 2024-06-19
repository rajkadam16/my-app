import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidescrollComponent } from './sidescroll.component';

describe('SidescrollComponent', () => {
  let component: SidescrollComponent;
  let fixture: ComponentFixture<SidescrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidescrollComponent]
    });
    fixture = TestBed.createComponent(SidescrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
