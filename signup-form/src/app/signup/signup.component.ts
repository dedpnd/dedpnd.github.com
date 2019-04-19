import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signUpGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, this.firstNameValidator]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit() {
  }

  // Мне лень дальше писать :)
  private firstNameValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value.length <= 3) {
      return {
        error_length: 'Минимум 3 символа'
      };
    }
    return null;
  }
}
