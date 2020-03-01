import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import {AppComponent} from './app.component'
import { ViewComponent } from './view/view.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationGaurdService as AuthGaurd } from './authentication-gaurd.service'
import { from } from 'rxjs';
const routes: Routes = [
  

  {
    path:'registration.htm',
    component:RegistrationComponent,
    canActivate:[AuthGaurd],
  },
  {
    path:'registration.htm/:id',
    component:RegistrationComponent,
    canActivate:[AuthGaurd],
  },
  {
    path:'view.htm',
    component:ViewComponent,
    canActivate:[AuthGaurd],
  },
  {
    path:'login.htm',
    component:LoginComponent

  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'login.htm'

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
