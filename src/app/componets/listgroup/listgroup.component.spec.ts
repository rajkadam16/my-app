import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListgroupComponent } from './listgroup.component';

describe('ListgroupComponent', () => {
  let component: ListgroupComponent;
  let fixture: ComponentFixture<ListgroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListgroupComponent]
    });
    fixture = TestBed.createComponent(ListgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
