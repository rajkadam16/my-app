import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-container',
  templateUrl: './dynamic-container.component.html',
  styleUrls: ['./dynamic-container.component.css']
})
export class DynamicContainerComponent {
  @Input("data") containerDataList: any; // decorate the property with @Input()
}
