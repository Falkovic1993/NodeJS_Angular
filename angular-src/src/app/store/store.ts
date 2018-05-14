import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { User } from '../entities/user';
import { UserReducer } from '../components/profile/profile.reducer';
import { UsersReducer } from '../components/users-list/users-list.reducer';

export class UserState {
user: User;

}

export class UsersState {
users: User[];
}


export class IAppState {
 user?: UserState;
 users?: UsersState;
}

export const rootReducer = combineReducers<IAppState>({
  user: UserReducer,
  users: UsersReducer,

 router: routerReducer
});
