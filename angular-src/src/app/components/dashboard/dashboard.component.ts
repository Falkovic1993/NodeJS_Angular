import { Component, OnInit } from '@angular/core';
import { myAuthService } from '../../services/auth.service';
import { NavbarService } from '../../services/navbar.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  constructor(
    private authService:myAuthService,
    public nav: NavbarService
  ) { }

  ngOnInit() {
    this.nav.show();
  }

}
