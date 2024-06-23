import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class CommonUtilityService {

  constructor(private http: HttpClient) { }


  /**
   * 
   * @param path : Json file path
   * @returns returns json Object
   * @author raj
   */
  parseJsonFile(path: string) {
    return this.http.get(path)
  }


  /**
   * 
   * @param targetFilePath 
   */
  exportToCsv(targetFilePath: string, elementById: string) {
    let data = document.getElementById(elementById);
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, targetFilePath);
  }

}
