import { AdminLoginService } from './../../../@shared/service/admin-login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  adminLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private adminLoginService: AdminLoginService
  ) {
    this.adminLogin = this.fb.group({
      gmail: [''],
      password: ['']
    })
  }

  ngOnInit(): void {
  }

  submit() {
    // this.adminLoginService.adminLogin(this.adminLogin.value).subscrib(
    //   (res:any)=>{

    //   },(err)=>{

    //   }
    // )
  }
}
