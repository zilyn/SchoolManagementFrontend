import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './@pages/landing/landing.component';
import { AdminLoginComponent } from './@pages/admin-login/admin-login.component';
import { TeacherLoginComponent } from './@pages/teacher-login/teacher-login.component';
import { StudentLoginComponent } from './@pages/student-login/student-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminDashboardComponent } from './@pages/admin-dashboard/admin-dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AdminLoginComponent,
    TeacherLoginComponent,
    StudentLoginComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
