import { Component } from '@angular/core';
import { CommonUtilityService } from 'src/app/services/common-utility.service';
import { SystemConfig } from 'src/app/shared/systemconfig';

@Component({
  selector: 'app-sideswiper2',
  templateUrl: './sideswiper2.component.html',
  styleUrls: ['./sideswiper2.component.css']
})
export class Sideswiper2Component {
  carousel: any[] = [];
  button: any[] = [];

  constructor(private imageGallary: CommonUtilityService) { }

  ngOnInit(): void {
    this.imageGallary.parseJsonFile(SystemConfig.imagegallaryJson).subscribe((res: any) => {
      this.carousel = res.carousel;
      this.button = res.button;
    });
  }

}
