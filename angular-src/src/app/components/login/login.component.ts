import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { myAuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular5-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email: String;
  password: String;

  constructor(
    private fb: FormBuilder,
    private authService:myAuthService,
    private router:Router,
    private flashMessage:FlashMessagesService,
    private socialAuthService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email:["", Validators.email],
      password:["", Validators.required],
    })
  }

  onSubmit(loginForm){
    const user = {
      email: this.email,
      password: this.password
    }
    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.flashMessage.show('You are now logged in', {cssClass:'green darken-3', timeout:5000});
        this.router.navigate(['/dashboard']);

        } else {
          this.flashMessage.show(data.msg, {cssClass:'red darken-3', timeout:5000});
          this.router.navigate(['/login']);
        }
      });
  }

  socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (user) => {
        console.log(socialPlatform+" sign in data : " , user);
        this.authService.authenticateUser(user).subscribe(data => {
          if(data.success) {
            this.authService.storeUserData(data.token, data.user);
            this.flashMessage.show('You are now logged in', {cssClass:'green darken-3', timeout:5000});
            this.router.navigate(['/dashboard']);
    
            } else {
              this.flashMessage.show(data.msg, {cssClass:'red darken-3', timeout:5000});
              this.router.navigate(['/login']);
            }
          });
            
      }
    );
  }


}
