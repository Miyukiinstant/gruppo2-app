import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private admin:LoginService) { }
  hideForm:boolean = false
  login(form:NgForm):void {
    this.admin.getLogin(form).subscribe(login=>{
      this.hideForm = login.login
    })
  }

  ngOnInit(): void {
  }

}
