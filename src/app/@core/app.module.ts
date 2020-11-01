import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './@pages/landing/landing.component';
import { AdminLoginComponent } from './@pages/admin-login/admin-login.component';
import { TeacherLoginComponent } from './@pages/teacher-login/teacher-login.component';
import { StudentLoginComponent } from './@pages/student-login/student-login.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AdminLoginComponent,
    TeacherLoginComponent,
    StudentLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
