import { UsersActions } from './users-list.action';
import { UsersState } from '../../store/store';
import { tassign } from 'tassign';

const INITIAL_STATE: UsersState = {  users: [] }

export function UsersReducer(state: UsersState = INITIAL_STATE, action:any) {

 switch (action.type) {

  // GET ALL USERS 
        case UsersActions.GET_USERS:
        return state;

        case UsersActions.RECEIVED_USERS:
        //console.log('action payload',action.payload.users) 
        return tassign(state, {users: action.payload.users})

        case UsersActions.FAILED_RECEVIED_USERS:
        //react to failed users case. 
        return state;

         // GET ALL USERS 
         case UsersActions.DELETE_USER:
        // console.log(action.payload)
         return state;
 
         case UsersActions.USER_DELETED:
         let remainingUsers = state.users.filter(user => {return user.id !== action.payload})
         return tassign(state, {users: remainingUsers })
 
         case UsersActions.USER_DELETED_FAILED:
         //react to failed users case. 
         return state;

        default:
        return state;
  }
}
