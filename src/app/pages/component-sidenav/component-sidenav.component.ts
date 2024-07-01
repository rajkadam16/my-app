import { Component} from '@angular/core';
import { CommonUtilityService } from 'src/app/services/common-utility.service';
import { SystemConfig } from 'src/app/shared/systemconfig';

@Component({
  selector: 'app-component-sidenav',
  templateUrl: './component-sidenav.component.html',
  styleUrls: ['./component-sidenav.component.css']
})
export class ComponentSidenavComponent {
sections:any []=[]

constructor(private sidenav: CommonUtilityService) { }

ngOnInit(): void {
  this.sidenav.parseJsonFile(SystemConfig.sidenavbarJson).subscribe((res: any) => {
  this.sections = res.section;
  });
}

}
