import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { Palazzo } from 'src/app/interfaces/palazzo';
import { TableService } from 'src/app/services/table/table.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private tables:TableService) { }
  colonne_palazzo: string[] = ['codice_palazzo','n_palazzo', 'piano', 'n_appartamenti']
  palazzo: any
  colonne_appartamento: string[] = ['codice_appartamento','codice_palazzo', 'n_locale', 'n_sala', 'metratura', 'costo']
  appartamento: any
  ngOnInit(): void {
    this.tables.getPalazzo().subscribe(palazzo=>{
      this.palazzo = palazzo
    })
    this.tables.getAppartamenti().subscribe(appartamento=>{
      this.appartamento = appartamento
    })
  }

}
