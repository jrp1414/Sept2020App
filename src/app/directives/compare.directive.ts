import { Directive, Input } from '@angular/core';
import { AbstractControl, NgModel, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[compare]',
  providers:[
    {provide:NG_VALIDATORS, useExisting:CompareDirective,multi:true}
  ]
})
export class CompareDirective implements Validator{

  @Input("compare") CompareWith;
  constructor() { }
  validate(control: AbstractControl): ValidationErrors {
    if (control?.value?.length < 4 && this.CompareWith?.length < 4) {
      return null;
    }else{
      if (control?.value !== this.CompareWith?.value) {
        return {mismatch:true};
      }
    }    
    return null;     
  }

}
