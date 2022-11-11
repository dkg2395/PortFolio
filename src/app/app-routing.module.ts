import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AchivementComponent } from './achivement/achivement.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { SupportersComponent } from './supporters/supporters.component';

const routes: Routes = [
  {path:  '', component:  HomeComponent},
  {path:  'about', component:  AboutComponent},
  {path:  'contact', component:  ContactComponent},
  {path:  'home', component:  HomeComponent},
  {path:  'achivement', component:  AchivementComponent},
  {path:  'supporters', component:  SupportersComponent},
   //Wild Card Route for 404 request
   { path: '**', pathMatch: 'full', 
   component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
