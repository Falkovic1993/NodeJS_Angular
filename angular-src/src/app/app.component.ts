import { Component, EventEmitter } from '@angular/core';
import { myAuthService } from './services/auth.service';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pilea';
  modalActions = new EventEmitter<string|MaterializeAction>();
  
  constructor(
    public authService:myAuthService,
  ) {}


  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  };
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }
}
