import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonUtilityService } from 'src/app/services/common-utility.service';
import { SystemConfig } from 'src/app/shared/systemconfig';

@Component({
  selector: 'app-listgroup1',
  templateUrl: './listgroup1.component.html',
  styleUrls: ['./listgroup1.component.css']
})
export class Listgroup1Component {
  listGroupData: any[] = [];
  activeItem: string = '';

  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;

  constructor(public listgroup: CommonUtilityService) {}

  ngOnInit(): void {
    this.listgroup
      .parseJsonFile(SystemConfig.listgroupJson)
      .subscribe((data: any) => {
        this.listGroupData = data;
      });
  }

  inview(itemId: string) {
    const element = this.scrollContainer.nativeElement.querySelector(
      `#${itemId}`
    );
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onview(itemId: string) {
    this.activeItem = itemId;
  }
}
