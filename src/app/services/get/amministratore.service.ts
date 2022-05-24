import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Appartamento } from 'src/app/interfaces/appartamento';
import { Urls } from 'src/app/interfaces/urls';

@Injectable({
  providedIn: 'root'
})
export class AmministratoreService {

  constructor(private http:HttpClient) { }

  getAmministratore(form:NgForm): Observable<any>{
    return this.http.post<any>(new Urls().urls.post,form.value)
  }
}
