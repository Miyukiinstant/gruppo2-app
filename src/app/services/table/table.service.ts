import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Amministratore } from 'src/app/interfaces/amministratore';
import { Appartamento } from 'src/app/interfaces/appartamento';
import { Contratto } from 'src/app/interfaces/contratto';
import { Palazzo } from 'src/app/interfaces/palazzo';
import { Urls } from 'src/app/interfaces/urls';

@Injectable({
  providedIn: 'root'
})
export class TableServiceGet {

  constructor(private http:HttpClient) { }

  getPalazzo(): Observable<Palazzo[]>{
    return this.http.get<Palazzo[]>(new Urls().urls.get+'?tipo=palazzo')
  }
  getAppartamenti(): Observable<Appartamento[]>{
    return this.http.get<Appartamento[]>(new Urls().urls.get+'?tipo=appartamento')
  }
  getAmministratore(): Observable<Amministratore[]>{
    return this.http.get<Amministratore[]>(new Urls().urls.get+'?tipo=amministratore')
  }
  getContratto(): Observable<Contratto[]>{
    return this.http.get<Contratto[]>(new Urls().urls.get+'?tipo=contratto')
  }
}
