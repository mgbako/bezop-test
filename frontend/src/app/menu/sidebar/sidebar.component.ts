import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isLoggedIn: boolean;
  loggedInUser: {};
  showRegister: boolean;
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.user().then(res => {
      if(res) {
        console.log(res)
        this.isLoggedIn = true;
        this.loggedInUser = res;
      } else {
        this.isLoggedIn = false;
      }
    }).catch(error => {
      console.log(error);
    });
  }

  onLogout(){
    this.isLoggedIn = false;
    this.authService.logout();
    this.router.navigate(['/signin']);
  }

}
