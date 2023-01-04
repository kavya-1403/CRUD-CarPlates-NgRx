
import { AbstractControl } from '@angular/forms';

export function ValidatePlateNumber(control: AbstractControl) {
  if(/^[A-Za-z]/i.test(control?.value?.substring(0,3)) && /^[0-9]/i.test(control?.value?.substring(3))) 
    return null;
  else {
    return {
        invalidPlateNumber: true
    }
  }
}