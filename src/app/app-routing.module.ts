import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SunriseComponent } from './sunrise/sunrise.component';
import { SunsetComponent } from './sunset/sunset.component';

const routes: Routes = [
  // blank path is the default or home 
  { path: '', component: HomeComponent }, 
  { path: 'sunrise', component: SunriseComponent },
  { path: 'sunrises', redirectTo: '/sunrise', pathMatch: 'full' },

  { path: 'sunset', component: SunsetComponent },
  //wildcard 
  { path: '**', component: PagenotfoundComponent } //order matters

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
