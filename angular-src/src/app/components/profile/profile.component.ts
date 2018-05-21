import { Component, OnInit, EventEmitter,   } from '@angular/core';
import { myAuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {MaterializeAction} from 'angular2-materialize';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { User } from '../../entities/user';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store/store';
import { UserActions } from './profile.action';
import { NavbarService } from '../../services/navbar.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  modalActions = new EventEmitter<string|MaterializeAction>();
  updateUserForm: FormGroup;
  firstname: string;
  profileForm: FormGroup;
  lastname:string;
  password:string;
  email:string;
  profile: User;
  name:string;
  phone:number;

  
  
  constructor(
    private authService:myAuthService,
    private router:Router,
    private fb: FormBuilder,
    private flashMessage: FlashMessagesService,
    private ngRedux: NgRedux<IAppState>,
    private userActions: UserActions,
    public nav: NavbarService
  ) { }

  ngOnInit() {
    this.nav.show();
    this.userActions.getUser();
  
    this.ngRedux.select(state => state.user).subscribe(res => {
      this.user = res.user
      console.log(this.user)
    });
  
    this.updateUserForm = this.fb.group({
      firstname:['', Validators.required],
      lastname:["", Validators.required],
      password:["", Validators.required],
      email:["", Validators.email],
      phone:["", Validators.required],
    })

    this.profileForm = this.fb.group({
      profile_img: ['', Validators.required]
    })



    
  }
  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  };
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }

  onSubmit(updateUserForm){
    console.log(updateUserForm)
    if(updateUserForm.valid){
      console.log(updateUserForm.value)
      const newUser  = {
        id: this.user.id,
        firstname: updateUserForm.value.firstname,
        lastname: updateUserForm.value.lastname,
        password: updateUserForm.value.password,
        email: updateUserForm.value.email,
        phone: updateUserForm.value.phone,
      }
      
      this.userActions.updateUser(newUser)
    } 
  }

  uploadImage(profileForm){
    console.log(profileForm)
    this.authService.uploadImage(profileForm).subscribe(data => console.log(data));
    console.log(profileForm.value)
  }
}
