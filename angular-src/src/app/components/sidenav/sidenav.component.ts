import { Component, OnInit } from '@angular/core';
import { myAuthService } from '../../services/auth.service';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store/store';
import { User } from '../../entities/user';
import { UserActions } from '../profile/profile.action';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
 user: any;

  constructor(
    public authService:myAuthService,
    private ngRedux: NgRedux<IAppState>,
    private userActions: UserActions,
  ) { }

  ngOnInit() {
   /* this.user = localStorage.getItem('user');
    console.log(this.user)
    this.user = JSON.parse(this.user)
    console.log(this.user)
*/
    this.userActions.getUser();
  
    this.ngRedux.select(state => state.user).subscribe(res => {
      this.user = res.user
      console.log(this.user)
    
  })
}

}
