import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { User } from '../entities/user';
import { UsersReducer } from '../components/profile/profile.reducer';

export class UserState {
user: User;
users: User[];
}


export class IAppState {
 user?: UserState;
}

export const rootReducer = combineReducers<IAppState>({
  user: UsersReducer,

 router: routerReducer
});
