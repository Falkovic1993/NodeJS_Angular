import { UserActions } from './profile.action';
import { UserState } from '../../store/store';
import { tassign } from 'tassign';

const INITIAL_STATE: UserState = { user: undefined }

export function UserReducer(state: UserState = INITIAL_STATE, action:any) {

 switch (action.type) {

  // GET USERS CASES
        case UserActions.FAILED_RECEVIED_USER:
        //react to failed users case. 
        return state;

        case UserActions.RECEIVED_USER:
        //action.payload is array of users 
        // I could set loading flag to false.
        console.log('action',action.payload) 
        return tassign(state, {user: action.payload.user[0]})

        case UserActions.GET_USER:
        return state;

    // UPDATE USER CASES

        case UserActions.UPDATE_USER: 
        console.log('action',action.payload);
        //let updatedUser = action.payload;
        return state

        case UserActions.USER_UPDATED:
        let updatedUser =  action.payload;
        return tassign(state, {user: updatedUser})

        default:
        return state;
  }
}
