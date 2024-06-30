import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-tab',
  templateUrl: './dynamictab.component.html',
  styleUrls: ['./dynamictab.component.css'],
})
export class DynamicTabComponent {
  @Input("data") tabDataList: any; // decorate the property with @Input()
}
