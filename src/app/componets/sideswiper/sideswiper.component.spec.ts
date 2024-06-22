import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideswiperComponent } from './sideswiper.component';

describe('SideswiperComponent', () => {
  let component: SideswiperComponent;
  let fixture: ComponentFixture<SideswiperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideswiperComponent]
    });
    fixture = TestBed.createComponent(SideswiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
