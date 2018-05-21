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
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { FileUploader } from 'ng2-file-upload';

const URL = "https://safe-badlands-70131.herokuapp.com/upload/"

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
  selectedFile: File = null;
  profileForm: FormGroup;
  lastname:string;
  password:string;
  email:string;
  profile: User;
  name:string;
  phone:number;
  public uploader:FileUploader = new FileUploader({url: URL});

  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
 
  
  
  constructor(
    private authService:myAuthService,
    private router:Router,
    private fb: FormBuilder,
    private flashMessage: FlashMessagesService,
    private ngRedux: NgRedux<IAppState>,
    private userActions: UserActions,
    public nav: NavbarService,
    private http:Http
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

  onFileSelected(event){
   this.selectedFile = <File>event.target.files[0];
  }
  
  onUpload(){
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name)
    return this.http.post('/upload', fd).subscribe(res => console.log(res))
  }

  uploadImage(profileForm){
    console.log(profileForm)
    this.authService.uploadImage(profileForm)
    console.log(profileForm.value)
  }
}
