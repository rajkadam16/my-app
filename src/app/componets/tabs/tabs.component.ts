import { Component } from '@angular/core';
import { Table1Component } from '../table/table1/table1.component';
import { TabModel } from 'src/app/services/interfaces/tab.model';
import { Sideswiper1Component } from '../sideswiper/sideswiper1/sideswiper1.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {

  tabDataList: TabModel[] = [{
    id: "overview",
    displayName: "Overview",
    defaultActive: "active",
    selected: true,
    components: []
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
      Sideswiper1Component]
  }
  ];
}
