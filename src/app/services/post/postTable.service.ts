import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Appartamento } from 'src/app/interfaces/appartamento';
import { Post } from 'src/app/interfaces/post';
import { Urls } from 'src/app/interfaces/urls';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http:HttpClient) { }

  postForm(form:NgForm):Observable<Post> {
    return this.http.post<Post>(new Urls().urls.post,form.value)
  }
  postFormAmm(form:NgForm):Observable<Appartamento[]> {
    return this.http.post<Appartamento[]>(new Urls().urls.post,form.value)
  }

}
