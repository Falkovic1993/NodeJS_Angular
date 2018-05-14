import { Component, OnInit } from '@angular/core';
import { myAuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store/store';
import { UsersActions } from './users-list.action';
import { User } from '../../entities/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: User[];

  constructor(
    private authService:myAuthService,
    private router:Router,
    private flashMessage: FlashMessagesService,
    private ngRedux: NgRedux<IAppState>,
    private usersActions: UsersActions,
  ) { }

  ngOnInit() {
    this.usersActions.getAllUsers();

    this.ngRedux.select(state => state.users).subscribe(res => {
      this.users = res.users
      //console.log(this.users)
    })
    
  }
  
  userDetails(id){
    this.router.navigate(['userdetails/', id])
  }

  deleteUser(id){
    this.usersActions.deleteUser(id)
  }

}
