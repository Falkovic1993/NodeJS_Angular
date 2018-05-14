import { Component, OnInit } from '@angular/core';
import { myAuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(
    private authService:myAuthService,
  ) { }

  ngOnInit() {
  }

}
