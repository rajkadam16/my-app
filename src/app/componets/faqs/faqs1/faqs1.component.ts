import { Component } from '@angular/core';
import { CommonUtilityService } from 'src/app/services/common-utility.service';
import { SystemConfig } from 'src/app/shared/systemconfig';

@Component({
  selector: 'app-faqs1',
  templateUrl: './faqs1.component.html',
  styleUrls: ['./faqs1.component.css']
})
export class Faqs1Component {
  faqData: any[] = [];

  constructor(private commonUtilityService: CommonUtilityService) { }

  ngOnInit(): void {
    this.commonUtilityService.parseJsonFile(SystemConfig.faqJson).subscribe((res: any) => {
      this.faqData = res;
    });
  }
  togglePanel(panel: any) {
    panel.isOpen = !panel.isOpen;
  }
}
