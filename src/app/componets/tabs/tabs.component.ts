import { Component } from '@angular/core';
import { Table1Component } from '../table/table1/table1.component';
import { TabModel } from 'src/app/services/interfaces/tab.model';
import { Sideswiper1Component } from '../sideswiper/sideswiper1/sideswiper1.component';
import { Tab2Component } from './tab2/tab2.component';
import { DynamicContainerComponent } from 'src/app/shared/dynamic-container/dynamic-container.component';
import { Profile1Component } from '../profilesection/profile1/profile1.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  //Overview
  containerDataList: any[] = [{
    components: [Table1Component]
  }]

  //Example
  tabDataList: TabModel[] = [{
    id: "overview",
    displayName: "Overview",
    defaultActive: "active",
    selected: true,
    components: [DynamicContainerComponent]
  },
  {
    id: "api",
    displayName: "API",
    defaultActive: "",
    selected: false,
    components: []
  },
  {
    id: "example",
    displayName: "Example",
    defaultActive: "",
    selected: false,
    components: [
      Table1Component,
      Sideswiper1Component,
      Tab2Component]
  }
  ];
}
