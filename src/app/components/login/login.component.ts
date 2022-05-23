import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private admin:LoginService,private router: Router) { }
  @Input() user:string | undefined

  hideForm:boolean = false
  login(form:NgForm):void {
    this.admin.getLogin(form).subscribe(login=>{
      this.hideForm = login.login
    })
  }

  ngOnInit(): void {
    this.admin.rescueLogin().subscribe(login=>{
      this.hideForm = login.login
    })
  }

}
