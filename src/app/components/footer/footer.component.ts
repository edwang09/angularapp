import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  isLoggedIn: boolean;
  loggedInUser: string;
  constructor(
    private authService: AuthService,
    
    private router: Router) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if(auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });
  }
  onLogoutClick() {
    this.authService.logout();
    /*this.flashMessage.show('You are now logged out', {
      cssClass: 'alert-success', timeout: 4000
    });*/
    this.router.navigate(['/login']);
  }

}
