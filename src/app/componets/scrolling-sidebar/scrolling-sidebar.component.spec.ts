import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingSidebarComponent } from './scrolling-sidebar.component';

describe('ScrollingSidebarComponent', () => {
  let component: ScrollingSidebarComponent;
  let fixture: ComponentFixture<ScrollingSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollingSidebarComponent]
    });
    fixture = TestBed.createComponent(ScrollingSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
