import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store/store';
import { User } from '../../entities/user';


@Injectable()
export class UserActions {
constructor (
  private ngRedux: NgRedux<IAppState>) {} 

  // GET USER
  static GET_USER: string = 'GET_USER';
  static RECEIVED_USER = 'RECEIVED_USER';
  static FAILED_RECEVIED_USER: string = 'FAILED_RECEVIED_USER';

  // UPDATE USER
  static UPDATE_USER: string = 'UPDATE_USER';
  static USER_UPDATED: string = 'USER_UPDATED';
  static UPDATE_USER_FAILED: string = 'UPDATE_USER_FAILED';


  getUser() {
    this.ngRedux.dispatch({
      type: UserActions.GET_USER
    })
  }

  updateUser(user: User):void {
    this.ngRedux.dispatch({
      type:UserActions.UPDATE_USER,
      payload: user
    })
   }

}
