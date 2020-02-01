import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import {AppComponent} from './app.component'
import { ViewComponent } from './view/view.component';
const routes: Routes = [
  
  {
    path:'home.htm',
    component:AppComponent
  },
  {
    path:'registration.htm',
    component:RegistrationComponent
  },
  {
    path:'view.htm',
    component:ViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
