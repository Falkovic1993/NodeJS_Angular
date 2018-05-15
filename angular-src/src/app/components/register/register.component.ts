import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { myAuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { PasswordValidator } from '../../services/PasswordValidator';
import { ValidateCharactersService } from '../../services/validate-characters.service';
import { Http } from '@angular/http';

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
  filesToUpload: Array<File> = [];

  constructor(
    private fb: FormBuilder, 
    private flashMessage: FlashMessagesService,
    private authService: myAuthService,
    private router: Router,
    private cd: ChangeDetectorRef,
    private http:Http ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstname:['', [ValidateCharactersService.validateCharacters , Validators.required ]],
      lastname:["", [ValidateCharactersService.validateCharacters , Validators.required ]],
      password:["", [Validators.required,  PasswordValidator.getPasswordValidator()]],
      password2:["", [Validators.required,  PasswordValidator.getPasswordValidator()]],
      email:["", Validators.email],
      phone:["", Validators.required],
    })
  }

  upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    console.log(files);

    for(let i =0; i < files.length; i++){
        formData.append("uploads[]", files[i], files[i]['name']);
    }
    console.log('form data variable :   '+ formData.toString());
    this.http.post('http://localhost:3000/users/upload', formData)
        .map(files => files.json())
        .subscribe(files => console.log('files', files))
}

fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    //this.product.photo = fileInput.target.files[0]['name'];
}


  onSubmit(registerForm){
    if(registerForm.valid) {
      const user = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        phone: this.phone,
        password: this.password,
      }

      console.log(user)
     // this.authService.vertifyUserSMS(user);
      this.authService.registerUser(registerForm).subscribe(data => {
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
