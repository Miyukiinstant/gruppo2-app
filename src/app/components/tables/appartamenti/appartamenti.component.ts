import { Component, OnInit, Output } from '@angular/core';
import { TableServiceGet } from 'src/app/services/table/table.service';

@Component({
  selector: 'app-appartamenti',
  templateUrl: './appartamenti.component.html',
  styleUrls: ['./appartamenti.component.sass']
})
export class AppartamentiComponent implements OnInit {

  constructor(private tables:TableServiceGet) { }
  colonne_appartamento: string[] = ['codice_appartamento','codice_palazzo', 'n_locale', 'n_sala', 'metratura', 'costo']
  @Output() appartamento: any
  ngOnInit(): void {
    this.tables.getAppartamenti().subscribe(appartamento=>{
      this.appartamento = appartamento
    })
  }

}
