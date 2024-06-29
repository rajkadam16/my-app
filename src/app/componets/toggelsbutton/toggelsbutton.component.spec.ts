import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggelsbuttonComponent } from './toggelsbutton.component';

describe('ToggelsbuttonComponent', () => {
  let component: ToggelsbuttonComponent;
  let fixture: ComponentFixture<ToggelsbuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToggelsbuttonComponent]
    });
    fixture = TestBed.createComponent(ToggelsbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
