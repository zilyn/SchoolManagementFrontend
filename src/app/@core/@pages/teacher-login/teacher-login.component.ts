import { TeacherLoginService } from './../../../@shared/service/teacher-login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.scss']
})
export class TeacherLoginComponent implements OnInit {

  teacherLogin: FormGroup;
  constructor(
    private fb: FormBuilder,
    private teacherLoginService: TeacherLoginService
  ) {
    this.teacherLogin = this.fb.group({
      gmail: [''],
      password: ['']
    })
  }

  ngOnInit(): void {
  }

  submit() {
    // this.teacherLoginService.teacherLogin(this.teacherLogin.value).subscrib(
    //   (res:any)=>{

    //   },(err)=>{

    //   }
    // )
  }
}
