import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AlertService } from '../../services/alert.service';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.scss']
})
export class AdminSignupComponent implements OnInit {

  user: any;
  signupForm: FormGroup;

  constructor( private router: Router, private authService: AuthService,
    private spinnerService: Ng4LoadingSpinnerService, private alertService: AlertService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    this.spinnerService.show();
    const data = {
      'email': form.value.email,
      'password': form.value.password,
      'confirmPassword': form.value.confirmPassword,
      'firstname': form.value.firstname,
      'lastname': form.value.lastname,
      'username': form.value.username,
      'phone': form.value.phone
    };

    if (data.password === data.confirmPassword) {
      this.authService.newadmin(data).subscribe(
        res => {
          this.alertService.success('Account Created Successfully');
          this.spinnerService.hide();

          if (res) {
            this.router.navigate(['/signin']);
          }
        },
        error => {

          if(error.message.email){
            this.alertService.error(error.message.email[0]);
          }
          this.spinnerService.hide();
          this.alertService.error(error.message.email);
          console.log(error.message);
        }
      );
    }
  }

}
