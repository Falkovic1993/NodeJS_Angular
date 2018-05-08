import { Injectable } from "@angular/core";
import { ActionsObservable } from "redux-observable";
import { AuthService } from "./services/auth.service";
import { Observable } from "rxjs/Observable";
import { UserActions } from "./components/profile/profile.action";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class UsersEpic {

  constructor(
    private authService: AuthService
  ) {}

  getUser = (action$: ActionsObservable<any>) => {
    return action$.ofType(UserActions.GET_USER) // Listen for this action
      .mergeMap(({payload}) => { // payload: (subject: Subject, date: Date): When this action is activated, call ws through service class or directly like below
          return this.authService.getProfile()
            .map(result => ({ // when web service responds with success, call this action with payload that came back from webservice
              type: UserActions.RECEIVED_USER,
              payload: result // Hack: Db contains all data, not just yours.
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