import { AfterViewInit, Component } from '@angular/core';
import Swiper  from 'swiper';

@Component({
  selector: 'app-sideswiper1',
  templateUrl: './sideswiper1.component.html',
  styleUrls: ['./sideswiper1.component.css']
})
export class Sideswiper1Component implements AfterViewInit {
  ngAfterViewInit(): void {
    const swiper = new Swiper('.mySwiper', {
    });
  }
}


