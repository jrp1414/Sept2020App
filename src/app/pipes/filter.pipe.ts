import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterText:string,filterColumn:string): any {
    if (filterText.length<3) {
        return value;
    }
    return value.filter((obj)=>obj[filterColumn].toLowerCase().indexOf(filterText.toLowerCase()) != -1);
  }

}
