import { Component, OnInit } from '@angular/core';
import { myAuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService:myAuthService,
    private router:Router,
    private flashMessage:FlashMessagesService,
    public nav: NavbarService) { }

  ngOnInit() {
  }

  onLogoutClick(){
    this.authService.logout();
    this.flashMessage.show('You are logged out', {cssClass:'green lighten-2', timeout:3000})
    this.router.navigate(['/home']);
    return false;
  }

}
