import { Component, OnInit } from '@angular/core';
import { TableServiceGet } from 'src/app/services/table/table.service';

@Component({
  selector: 'app-palazzo',
  templateUrl: './palazzo.component.html',
  styleUrls: ['./palazzo.component.sass']
})
export class PalazzoComponent implements OnInit {

  constructor(private tables:TableServiceGet) { }
  colonne_palazzo: string[] = ['codice_palazzo','n_palazzo', 'piano', 'n_appartamenti', 'indirizzo']
  palazzo: any
  ngOnInit(): void {
    this.tables.getPalazzo().subscribe(palazzo=>{
      this.palazzo = palazzo
    })
  }

}
