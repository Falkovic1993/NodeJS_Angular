import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';

import { NgRedux, DevToolsExtension, NgReduxModule } from '@angular-redux/store';
import { IAppState, rootReducer } from './store/store';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { UserActions } from './components/profile/profile.action';

import { createEpicMiddleware, combineEpics } from "redux-observable";
import { createLogger } from "redux-logger";



import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FooterComponent } from './components/footer/footer.component';


import { myAuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { UsersEpic } from './users.epic';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersActions } from './components/users-list/users-list.action';

import {  SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from "angular5-social-login";
import { ChatroomComponent } from './components/chatroom/chatroom.component';
import { ChatService } from './services/chat.service';
import { WebsocketService } from './services/websocket.service';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { StatsComponent } from './components/stats/stats.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { DetailedinformationComponent } from './components/detailedinformation/detailedinformation.component';
import { FilterusersPipe } from './filterusers.pipe';
import { PasswordValidator } from './services/PasswordValidator';
import { NavbarService } from './services/navbar.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ProfileComponent,
    FooterComponent,
    SidenavComponent,
    UsersListComponent,
    ChatroomComponent,
    UserdetailsComponent,
    StatsComponent,
    ProjectsComponent,
    DetailedinformationComponent,
    FilterusersPipe,
    FileSelectDirective
  ],
  imports: [
    FormsModule,
    MaterializeModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatGridListModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot(),
    HttpModule,
    NgReduxModule,
    NgReduxRouterModule.forRoot(),
    SocialLoginModule
  ],
  providers: [
    myAuthService,
    NavbarService,
    AuthGuard,
    UserActions,
    UsersActions,
    UsersEpic,
    PasswordValidator,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    ChatService,
    WebsocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private devTool: DevToolsExtension,
    private ngReduxRouter: NgReduxRouter,
    private usersEpic: UsersEpic) {

    const rootEpic = combineEpics(
      this.usersEpic.getUser,
      this.usersEpic.updateUser,
      this.usersEpic.getAllUsers,
      this.usersEpic.deleteUser 
        // Each epic is referenced here.
    );
        
   
    const middleware = [
      createEpicMiddleware(rootEpic), createLogger({ level: 'info', collapsed: true })
    ];
    this.ngRedux.configureStore(
      rootReducer,
      {},middleware, [ devTool.isEnabled() ? devTool.enhancer() : f => f]);
 
 
      ngReduxRouter.initialize(/* args */);   
  }
 }

 // GOOGLE AND FACEBOOK LGOIN
 export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("630576007294206")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("519676817251-00tmt8ii5s68ll9pgtojc7rcebtbu66e.apps.googleusercontent.com")
        },
      ]);
  return config;
}
 
