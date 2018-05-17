import { UsersReducer } from "./users-list.reducer";
//import { RegisterActions } from "./register-baby.actions";
import * as types from './users-list.action';
const deepFreeze = require('deep-freeze');


describe('Users Reducer', () => {
    // Should make a function that returns initial state instead defining it everytime. 

    it('Toggle state', () => {
      let user = { 
        id: 100,
        firstname: 'Emil',
        lastname: 'falk',
        password: 'dasdas',
        email: 'emil93falk@hotmail.com',
        phone: 12121212
      }
        let state = { usersState: undefined, users:[user] };
        deepFreeze(state);
    });
    
    it('Should Delete a user ', ()=> {
      const user = { 
        id: 100,
        firstname: 'Emil',
        lastname: 'falk',
        password: 'dasdas',
        email: 'emil93falk@hotmail.com',
        phone: 12121212
      }
      const user1 = { 
        id: 122,
        firstname: 'Emil',
        lastname: 'falk',
        password: 'dasdas',
        email: 'emil93falk@hotmail.com',
        phone: 12121212
      }
        let initialState = { usersState: undefined, users:[user,user1] };
        deepFreeze(initialState);

        let afterState = {  usersState: undefined, users:[user1] };

        let newState = UsersReducer(initialState, {
            type: types.UsersActions.USER_DELETED,
            payload:user.id
        });
        //expect(newState).toEqual(1);
        expect(newState).toEqual(afterState);
    })

    it('Should not delete anything if no user with id is found', ()=> {
      const user = { 
        id: 100,
        firstname: 'Emil',
        lastname: 'falk',
        password: 'dasdas',
        email: 'emil93falk@hotmail.com',
        phone: 12121212
      }
      const user1 = { 
        id: 122,
        firstname: 'Emil',
        lastname: 'falk',
        password: 'dasdas',
        email: 'emil93falk@hotmail.com',
        phone: 12121212
      }
        let initialState = { usersState: undefined, users:[user,user1] };
        deepFreeze(initialState);

        let afterState = {  usersState: undefined, users:[user, user1] };

        let newState = UsersReducer(initialState, {
            type: types.UsersActions.USER_DELETED,
            payload: 300
        });
        //expect(newState).toEqual(2);
        expect(newState).toEqual(afterState);
    })
})