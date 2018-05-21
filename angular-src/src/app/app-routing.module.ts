import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';

import { AuthGuard } from './guards/auth.guard';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { ChatroomComponent } from './components/chatroom/chatroom.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { StatsComponent } from './components/stats/stats.component';
import { DetailedinformationComponent } from './components/detailedinformation/detailedinformation.component';
import { ProjectsComponent } from './components/projects/projects.component';

const appRoutes: Routes = [
    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:'register', component: RegisterComponent},
    {path:'login', component: LoginComponent},
    {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
    {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
    {path:'employess', component: UsersListComponent, canActivate:[AuthGuard]},
    {path:'chatroom', component: ChatroomComponent, canActivate:[AuthGuard]},
    {path:'userdetails/:id', component: UserdetailsComponent, canActivate:[AuthGuard],
      children: [
        {path: '', redirectTo: 'employess', pathMatch:'full' },
        {path:'stats', component: StatsComponent},
        {path:'detailedinfo', component: DetailedinformationComponent},
        {path:'projects', component: ProjectsComponent},
      ]},
    

]

@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        {useHash:true},
      )
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }