import { StudentLoginService } from './../../../@shared/service/student-login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.scss']
})
export class StudentLoginComponent implements OnInit {

  studentLogin: FormGroup;
  constructor(
    private fb: FormBuilder,
    private studentLoginService: StudentLoginService,
  ) {
    this.studentLogin = this.fb.group({
      gmail: [''],
      password: ['']
    })
  }

  ngOnInit(): void {
  }

  submit() {
    // this.studentLoginService.studentLogin(this.studentLogin.value).subscrib(
    //   (res:any)=>{

    //   },(err)=>{

    //   }
    // )
  }

}
