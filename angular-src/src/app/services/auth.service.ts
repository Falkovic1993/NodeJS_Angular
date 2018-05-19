import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { User } from '../entities/user';

@Injectable()
export class myAuthService {
  authToken: any;
  user: any;

  constructor(private http:Http ) { }

  

  vertifyUser(to){
    console.log('Email:',to)
    return this.http.post('users/send', {to:to}).subscribe(function(data) {
      if(data)
      console.log(data)
    })
  }

  vertifyUserSMS(user){
    let headers = new Headers();
    const ApiToken = '$2y$10$XE8PnMXRtvHUbBuaDQPVnugRwUxoOx85SZzoCtoWGwKDnKeK8av7O'
    let data = `apiToken=$2y$10$XE8PnMXRtvHUbBuaDQPVnugRwUxoOx85SZzoCtoWGwKDnKeK8av7O&message=${user.firstname}&mobile=${user.phone}`;
    headers.append('Content-type','application/x-www-form-urlencoded');
    return this.http.post('http://smses.io/api-send-sms.php', data , {headers:headers})
      .subscribe(res => res.json());
  }

  registerUser(user){
    //console.log('EHEHHEHEHEE',user.get('image'))
    return this.http.post('users/register', user)
      .map(res => res.json());  
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-type','application/json');
    return this.http.post('users/authenticate', user, {headers:headers})
      .map(res => res.json());
  }

  updateUser(user: User){
    let headers = new Headers();
    console.log(user)
    headers.append('Content-type','application/json');
    return this.http.post('users/updateUser', user, {headers:headers})
      .map(res => res.json());
  }

  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken)
    headers.append('Content-type','application/json');
    return this.http.get('users/profile', {headers:headers})
      .map(res => res.json());
  }

  deleteUser(id){
    let headers = new Headers();
    console.log(id)
    headers.append('Content-type','application/json');
    headers.append('id', id)
    return this.http.post('users/deleteUser', id, {headers:headers})
    .map(res => res.json());
  }

  getUserById(id){
    let headers = new Headers();
    console.log(id)
    headers.append('Content-type','application/json');
    headers.append('id', id)
    return this.http.post('users/getuserbyid', id, {headers:headers})
    .map(res => res.json());
  }
  

  getAllUsers(){
    let headers = new Headers();
    headers.append('Content-type','application/json');
    return this.http.get('users/getAllUsers', {headers:headers})
    .map(res => res.json());
  }

  storeUserData(token, user) {
  localStorage.setItem('id_token', token);
  localStorage.setItem('user', JSON.stringify(user));
  this.authToken = token;
  this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
    return tokenNotExpired('id_token');
  }

  logout() {
  this.authToken = null;
  this.user = null;
  localStorage.clear();
  }



}
