import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  firstname: string;
  lastname:string;
  password:string;
  email:string;

  constructor(
    private fb: FormBuilder, 
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstname:['', Validators.required],
      lastname:["", Validators.required],
      password:["", Validators.required],
      password2:["", Validators.required],
      email:["", Validators.email],
    })
  }

  onSubmit(registerForm){
    if(registerForm.valid) {
      const user = {
        firstname: this.firstname,
        lastname: this.lastname,
        password: this.password,
        email: this.email
      }
      console.log(user)
      this.authService.registerUser(user).subscribe(data => {
        if(data.success){
          this.flashMessage.show('You are now registered and can log in', {cssClass: 'green lighten-3', timeout:3000});
          this.router.navigate(['/login']);
        } else {
          this.flashMessage.show('There was an error', {cssClass: 'red', timeout:3000});
          this.router.navigate(['/register']);
        } 
      })
    } else {
      console.log('error')
      this.flashMessage.show('Error', {cssClass: 'red', timeout:3000});
    }
  }

}
