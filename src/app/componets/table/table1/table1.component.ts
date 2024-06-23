import { Component } from '@angular/core';
import { SystemConfig } from 'src/app/shared/systemconfig';
import { CommonUtilityService } from 'src/app/services/common-utility.service'

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
export class Table1Component {
  tableInfoData: any[] = [];
  tableSectionData: any[] = [];
  excelBtnData: any[] = [];
  checkAll: boolean = false;
  pageSize = 5;
  currentPage = 1;
  searchtext: any;


  //------

  tblCols: any[] = [];
  tblDataList: any[] = [];
  tblProperties: any;

  constructor(private commonUtilityService: CommonUtilityService) { }
  ngOnInit(): void {
    this.commonUtilityService.parseJsonFile(SystemConfig.tableJson).subscribe((res: any) => {
      this.tblCols = res.tblCols;
      this.tblDataList = res.tblDataList;
      this.tblProperties = res.tblProperties;
    });
  }
  toggleCheckAll() {
    this.checkAll = !this.checkAll;
    this.tableInfoData.forEach((item) => (item.selected = this.checkAll));
  }
  onItemChange() {
    this.checkAll = this.tableInfoData.every((item) => item.selected);
  }

  /**
   * 
   */
  exportToCsv(){
    this.commonUtilityService.exportToCsv("tableData.csv", "table-data")
  }

  exportToPdf(){

  }
}
