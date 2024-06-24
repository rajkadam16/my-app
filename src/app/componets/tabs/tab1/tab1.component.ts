import { Component } from '@angular/core';
import { CommonUtilityService } from 'src/app/services/common-utility.service';
import { SystemConfig } from 'src/app/shared/systemconfig';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css'],
})
export class Tab1Component {
  constructor(private commonUtilityService: CommonUtilityService) {}

  tabs: any[] = [];
  ngOnInit(): void {
    this.commonUtilityService
      .parseJsonFile(SystemConfig.tabsJson)
      .subscribe((res: any) => {
        this.tabs = res.tabs;
      });
  }

  selectTab(index: number) {
    this.tabs.forEach((tab, i) => (tab.active = i === index));
  }
}
