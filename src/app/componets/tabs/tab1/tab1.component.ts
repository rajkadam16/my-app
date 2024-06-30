import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css'],
})
export class Tab1Component {
  @Input("data") tabDataList: any; // decorate the property with @Input()
}
