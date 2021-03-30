import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LloginComponent } from './llogin/llogin.component';
import { DisplayquizComponent } from './displayquiz/displayquiz.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path:'',component:HomeComponent },
  { path:'home',component:HomeComponent },
  { path:'signup',component:SignupComponent},
  { path:'llogin',component:LloginComponent },
  
  { path:'displayquiz',component:DisplayquizComponent},
  { path:'instructions',component:InstructionsComponent},
  { path:'about',component:AboutComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
