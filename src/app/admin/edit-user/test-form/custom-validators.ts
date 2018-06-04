import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function NameValidator(): ValidatorFn {
  return (control: AbstractControl) : {[key: string]: any} => {

  }
}

export function SomeNumberValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const rightNum = parseInt(control.value, 10);
    console.log(rightNum);
    const test = rightNum > 5 || rightNum < 3;
    console.log(test);
    return test ? <ValidationErrors>{'bad number': {value: control.value}} : null;
  };
}
