import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/post';
import { Urls } from 'src/app/interfaces/urls';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http:HttpClient) { }
  updateRow(form:NgForm):Observable<Post>{
    return this.http.post<Post>(new Urls().urls.update,form.value)
  }
}
