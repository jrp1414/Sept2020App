import { AbstractControl, ValidatorFn } from '@angular/forms';

export function RangeValidator(min: number, max: number): ValidatorFn {

    return function (control: AbstractControl): null | { [key: string]: boolean } {
        if (control.value >= min && control.value <= max) {
            return null;
        }
        return { range: true };
    }
}