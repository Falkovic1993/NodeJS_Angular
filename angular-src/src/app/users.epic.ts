import { Injectable } from "@angular/core";
import { ActionsObservable } from "redux-observable";
import { myAuthService } from "./services/auth.service";
import { Observable } from "rxjs/Observable";
import { UserActions } from "./components/profile/profile.action";
import { UsersActions } from "./components/users-list/users-list.action";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class UsersEpic {

  constructor(
    private authService: myAuthService
  ) {}

  getAllUsers = (action$: ActionsObservable<any>) => {
    return action$.ofType(UsersActions.GET_USERS)
      .mergeMap(({payload}) => { 
          return this.authService.getAllUsers()
            .map(result => ({ 
              type: UsersActions.RECEIVED_USERS,
              payload: result 
            }))
            .catch(error => Observable.of({ 
              type: UsersActions.FAILED_RECEVIED_USERS,
              payload: error
          }));
    });
  }

  deleteUser = (action$: ActionsObservable<any>) => {
    return action$.ofType(UsersActions.DELETE_USER) 
      .mergeMap(({payload}) => {
          return this.authService.deleteUser(payload)
            .map(result => ({
              type: UsersActions.USER_DELETED,
              payload: payload 
            }))
            .catch(error => Observable.of({ 
              type: UsersActions.USER_DELETED_FAILED,
              payload: error
          }));
    });
  }

  getUser = (action$: ActionsObservable<any>) => {
    return action$.ofType(UserActions.GET_USER) // Listen for this action
      .mergeMap(({payload}) => { 
          return this.authService.getProfile()
            .map(result => ({ // when web service responds with success, call this action with payload that came back from webservice
              type: UserActions.RECEIVED_USER,
              payload: result 
            }))
            .catch(error => Observable.of({ // when web service responds with failure, call this action with payload that came back from webservice
              type: UserActions.FAILED_RECEVIED_USER,
              payload: error
          }));
    });
  }

  updateUser = (action$: ActionsObservable<any>) => {
    return action$.ofType(UserActions.UPDATE_USER) 
      .mergeMap(({payload}) => { 
          return this.authService.updateUser(payload)
          .map((result: any) =>  ({
            type: UserActions.USER_UPDATED,
            payload: payload
            }))
            .catch(error => Observable.of({ 
              type: UserActions.UPDATE_USER_FAILED,
              payload: error
          }));
    });
  }



}