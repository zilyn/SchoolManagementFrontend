import { StudentLoginComponent } from './@pages/student-login/student-login.component';
import { TeacherLoginComponent } from './@pages/teacher-login/teacher-login.component';
import { AdminLoginComponent } from './@pages/admin-login/admin-login.component';
import { LandingComponent } from './@pages/landing/landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'admin-login',
    component: AdminLoginComponent
  },
  {
    path: 'teacher-login',
    component: TeacherLoginComponent
  },
  {
    path: 'student-login',
    component: StudentLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
