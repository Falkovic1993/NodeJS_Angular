import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { myAuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { PasswordValidator } from '../../services/PasswordValidator';
import { ValidateCharactersService } from '../../services/validate-characters.service';

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
  phone:string;
  image:File;

  constructor(
    private fb: FormBuilder, 
    private flashMessage: FlashMessagesService,
    private authService: myAuthService,
    private router: Router,
    private cd: ChangeDetectorRef ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstname:['', [ValidateCharactersService.validateCharacters , Validators.required ]],
      lastname:["", [ValidateCharactersService.validateCharacters , Validators.required ]],
      password:["", [Validators.required,  PasswordValidator.getPasswordValidator()]],
      password2:["", [Validators.required,  PasswordValidator.getPasswordValidator()]],
      email:["", Validators.email],
      phone:["", Validators.required],
      //profile_img:["", Validators.required],
    })
  }

  onFileChange(ev){
    console.log(ev.target.files[0])
    this.image = ev.target.files[0];
  }

  onSubmit(registerForm){
    if(registerForm.valid) {
      const user = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        phone: this.phone,
        password: this.password,
       // image: this.image
      }

      console.log(user)
      this.authService.vertifyUserSMS(user);
      this.authService.registerUser(user).subscribe(data => {
        if(data.success){
          this.flashMessage.show('You are now registered - Vertify your mail to log in!', {cssClass: 'green lighten-3', timeout:3000});
          this.router.navigate(['/login']);
          this.authService.vertifyUser(user.email);
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
