import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store/store';
import { User } from '../../entities/user';


@Injectable()
export class UsersActions {
constructor (
  private ngRedux: NgRedux<IAppState>) {} 

  // GET USER
  static GET_USERS: string = 'GET_USERS';
  static RECEIVED_USERS = 'RECEIVED_USERS';
  static FAILED_RECEVIED_USERS: string = 'FAILED_RECEVIED_USERS';

  getAllUsers() {
    this.ngRedux.dispatch({
      type: UsersActions.GET_USERS
    })
  }

  //Delete User
  static DELETE_USER: string = 'DELETE_USER';
  static USER_DELETED = 'USER_DELETED';
  static USER_DELETED_FAILED: string = 'USER_DELETED_FAILED';

  deleteUser(id: number): void {
    this.ngRedux.dispatch({
      type: UsersActions.DELETE_USER,
      payload: id
    })
  }


  
}
