import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LloginComponent } from './llogin/llogin.component';
import { SignupComponent } from './signup/signup.component';
import { CreatequizComponent } from './createquiz/createquiz.component';
import { DisplayquizComponent } from './displayquiz/displayquiz.component';
import { ReviewComponent } from './review/review.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LloginComponent,
    SignupComponent,
    CreatequizComponent,
    DisplayquizComponent,
    ReviewComponent,
    InstructionsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
