import { Component, OnDestroy, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private admin:LoginService,private _matSnackBar:MatSnackBar) { }

  hideForm:boolean = false

  login(form:NgForm):void {
    this.admin.getLogin(form).subscribe(login=>{
      if(!form.value.password) return;

      this._matSnackBar.open(`Login Riuscito ✅ come ${login.user}`, undefined,{
        horizontalPosition:'center',
        verticalPosition:'top'
      })

      this.hideForm = login.login
      if(!login.login){
        this._matSnackBar.open('Password errata ❌',undefined,{
          horizontalPosition:'center',
          verticalPosition:'top',
          duration: 2000
        })
      }
    })
  }

  ngOnInit(): void {
    this.admin.rescueLogin().subscribe(login=>{
      this.hideForm = login.login
      if(!login.login) return;
      this._matSnackBar.open(`Login Riuscito ✅ come ${login.user}`, undefined,{
        horizontalPosition:'center',
        verticalPosition:'top'
      })
    })
  }
  ngOnDestroy(): void {
    this._matSnackBar.dismiss() 
  }
}
