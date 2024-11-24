import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DjsComponent } from './djs/djs.component';
import { BookingsComponent } from './bookings/bookings.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ClientSignupComponent } from './client-signup/client-signup.component';
import { DjSignupComponent } from './dj-signup/dj-signup.component';
import { DjDetailsComponent } from './dj-details/dj-details.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent },
  { path: 'djs', component: DjsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'client-signup', component: ClientSignupComponent },
  { path: 'dj-signup', component: DjSignupComponent },
  {path:'dj/:id',component:DjDetailsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }  // Default route
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }