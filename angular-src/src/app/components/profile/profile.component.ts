import { Component, OnInit, EventEmitter,   } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {MaterializeAction} from 'angular2-materialize';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { User } from '../../entities/user';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store/store';
import { UserActions } from './profile.action';


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
  lastname:string;
  password:string;
  email:string;
  profile: User;
  name:string;

  
  
  constructor(
    private authService:AuthService,
    private router:Router,
    private fb: FormBuilder,
    private flashMessage: FlashMessagesService,
    private ngRedux: NgRedux<IAppState>,
    private userActions: UserActions,
  ) { }

  ngOnInit() {
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
    })

    
  }
  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  };
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }

  onSubmit(updateUserForm){
    if(updateUserForm.valid){
      const newUser  = {
        id: this.user.id,
        firstname: this.firstname,
        name: this.firstname,
        lastname: this.lastname,
        password: this.password,
        email: this.email,
        username: this.firstname
      }
      
      this.userActions.updateUser(newUser)

      /*.subscribe(data => {
        if(data.success){
          this.flashMessage.show('You user has been updated', {cssClass: 'green lighten-3', timeout:3000});
          this.router.navigate(['/profile']);
        } else {
          this.flashMessage.show('There was an error', {cssClass: 'red', timeout:3000});
          this.router.navigate(['/profile']);
        } 
      })
      //this.authService.updateUser(newUser).subscribe(data => {
        
      } else {
        console.log('error')
      }
      
    }*/
}
  }}
