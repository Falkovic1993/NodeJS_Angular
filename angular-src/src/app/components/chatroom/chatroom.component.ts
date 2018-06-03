import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { myAuthService } from '../../services/auth.service';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  userId: any;
  msg: string;
  messages = [];
  user:any;
  message: any;
  
  

  constructor(
    private chat: ChatService,
    private fb: FormBuilder,
    private myauthService: myAuthService,
    public nav: NavbarService
  ) { }

  ngOnInit() {
    this.nav.show();
    this.chat.getAllMessages().subscribe(res => {
      console.log('RES',res.messages)
      this.messages = res.messages
      console.log(this.messages)
    })

    this.chat.message.subscribe(data => {
      this.messages.push(data)
      console.log(this.messages)
    })

   this.user = JSON.parse(localStorage.getItem('user'))
   console.log(this.user.firstname)
  }

  sendMessage(message: string){
    let userId = this.user.id;
    let date = new Date;
    this.chat.getUserById(userId).subscribe(res => {
      //console.log(res)
      let username = res.user[0].firstname
      let data = {'userId':userId, 'firstname':username, 'messages':message, 'date':date}
      this.chat.sendMessage(data);
      this.chat.saveMessage(data);
    })
    
    
    
  }

}
