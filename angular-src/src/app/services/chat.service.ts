import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Observable, Subject } from 'rxjs/Rx';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ChatService {

  message:Subject<any>

  constructor(
    private wsService: WebsocketService,
    private http:Http,
  ) {
    this.message = <Subject<any>>wsService
    .connect()
    .map((response: any): any => {
      return response;
    });
   }

  sendMessage(data){
    this.message.next(data)
  }

  saveMessage(data){
    let headers = new Headers();
    //console.log(data)
    headers.append('Content-type','application/json');
    return this.http.post('messages/savemessages', {data}, {headers:headers}).subscribe(res => res.json());
}

  getAllMessages(){
    let headers = new Headers();
    headers.append('Content-type','application/json');
    return this.http.get('messages/getallmessages')
    .map(res => res.json());
  };

  getUserById(id){
    let headers = new Headers();
    //console.log(id)
    headers.append('id', id)
    return this.http.post('users/getuserbyid', id, {headers:headers})
    .map(res => res.json());
  }

}