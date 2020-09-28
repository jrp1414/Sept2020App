import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  // transform(value: any[], filterText:string,filterColumn:string): any {
  transform(value: any[], filterText: string, ...filterColumns: string[]): any {
    if (filterText.length < 3) {
      return value;
    }
    // return value.filter((obj) => (obj.productName.toLowerCase().indexOf(filterText.toLowerCase()) != -1) || obj.productCode.toLowerCase().indexOf(filterText.toLowerCase()) != -1);
    let tempList:any[]= [];
    for (let column of filterColumns) {
      var filtered = value.filter((obj)=>obj[column].toLowerCase().indexOf(filterText.toLowerCase()) != -1);
      Array.prototype.push.apply(tempList,filtered); 
    }
    return tempList;
  }

}
