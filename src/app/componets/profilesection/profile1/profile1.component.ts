import { Component } from '@angular/core';
import { CommonUtilityService } from 'src/app/services/common-utility.service';
import { SystemConfig } from 'src/app/shared/systemconfig';

@Component({
  selector: 'app-profile1',
  templateUrl: './profile1.component.html',
  styleUrls: ['./profile1.component.css']
})
export class Profile1Component {
  profileData: any[] = [];
 

  constructor(public profile: CommonUtilityService) { }

  ngOnInit(): void {
    this.profile.parseJsonFile(SystemConfig.profileJson).subscribe((res: any) => {
      this.profileData = res.profile;

    });
  }
}
