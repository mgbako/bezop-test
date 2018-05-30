import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

import { AlertService } from '../../services/alert.service';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  user;
  isLoggedIn: boolean;
  loggedInUser: {};
  showRegister: boolean;
  constructor( private authService: AuthService, private spinnerService: Ng4LoadingSpinnerService, 
    private alertService: AlertService,
    private router: Router) { }

  ngOnInit() {
    this.spinnerService.show();
    this.authService.user().then(
      res => {
        if(res) {
          this.user = res;
          this.isLoggedIn = true;
          this.loggedInUser = res;
          this.spinnerService.hide();
        } else {
          this.isLoggedIn = false;
          this.spinnerService.hide();
        }
      }, error => {
        console.log(error);
        this.spinnerService.hide();
      });
  }

  onLogout(){
    this.isLoggedIn = false;
    this.authService.logout();
    this.router.navigate(['/signin']);
  }

}
