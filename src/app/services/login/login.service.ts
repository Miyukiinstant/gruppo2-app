import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Login } from 'src/app/interfaces/login';
import { Urls } from 'src/app/interfaces/urls';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  getLogin(form:NgForm): Observable<Login>{
    return this.http.post<Login>(new Urls().urls.login,
    form.value)
  }
}
