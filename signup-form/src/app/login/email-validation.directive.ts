import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appEmailValidation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EmailValidationDirective, multi: true }]
})
export class EmailValidationDirective implements Validator {
  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    if (/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(control.value)) {
      return null;
    }

    return {
      regexp: 'Это не email'
    };
  }
}
