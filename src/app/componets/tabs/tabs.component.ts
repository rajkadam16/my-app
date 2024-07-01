import { Component } from '@angular/core';
import { TabModel } from 'src/app/services/interfaces/tab.model';
import { Tab2Component } from './tab2/tab2.component';

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
      Tab2Component]
  }
  ];
}
