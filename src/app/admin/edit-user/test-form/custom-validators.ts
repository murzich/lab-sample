import { AbstractControl, ValidatorFn } from '@angular/forms';

export function NameValidator(): ValidatorFn {
  return (control: AbstractControl) : {[key: string]: any} => {

  }
}

export function SomeNumberValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const rightNum = parseInt(control.value, 10);
    const test = rightNum < 2 && rightNum > 6;
    console.log(test);
    return test ? {'bad number': control.value} : null;
  };
}
