import { Component, OnInit } from '@angular/core';
import { myAuthService } from '../../services/auth.service';
import { Router, ActivatedRoute, Params, Data, Route } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store/store';
import { User } from '../../entities/user';
import { UsersEpic } from '../../users.epic';
import { Subscription } from 'rxjs';
import { UserActions } from '../profile/profile.action';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  subscription: Subscription;
  id: number = this.route.snapshot.params.id;
  user: User;
  users: User[];

  constructor(
    private route: ActivatedRoute,
    private authService:myAuthService,
    private router:Router,
    private flashMessage: FlashMessagesService,
    private ngRedux: NgRedux<IAppState>,
    private userActions: UserActions,
    public nav: NavbarService
  ) { }

  ngOnInit() {
    this.nav.show();
    this.authService.getUserById(this.id).subscribe(res => {
      console.log(res);
      this.user = res[0];
      console.log(this.user)
    })
    
  }

}
