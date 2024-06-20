// Angular
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// Services
import { LoginService } from '../../../../core/services/api/login.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  Laform !:RegExp; //REGEXP est une expression reguliere

  // Holds form
  form!: FormGroup;

  // I agree checkbox value
  agree = true;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  /**
   * Build registration form
   */
  buildForm(): void {
    this.Laform=/^[a-zA-Z][a-zA-Z]*$/ ;
      this.form = this.formBuilder.group({
        Nom:new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z][a-zA-Z]*$/),Validators.maxLength(15),Validators.minLength(3) ]),
        Prenom:new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z][a-zA-Z]*$/),Validators.maxLength(15),Validators.minLength(3)]),
        Telephone:new FormControl('', [Validators.pattern('^[0-9]{8}$')]
        ),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(4)]),
        confirm_password: new FormControl ('', [Validators.required])
      }, {
        validator: ConfirmedValidator('password', 'confirm_password')
      });
  }

  /**
   * User registration
   */
  register(): void {
    this.loginService.userLogin();
  }

  /**
   * Do your Google login code here
   */
  googleLogin(): void {
  }
  get f() {
    return this.form.controls;
  } }

function ConfirmedValidator(controlName: string, matchingControlName: string){
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors['confirmedValidator']) {
          return;
      }
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ confirmedValidator: true });
      } else {
          matchingControl.setErrors(null);
      }
  }

}
