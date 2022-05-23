import { Component, OnInit } from '@angular/core';
import { TableServiceGet } from 'src/app/services/table/table.service';

@Component({
  selector: 'app-contratto',
  templateUrl: './contratto.component.html',
  styleUrls: ['./contratto.component.sass']
})
export class ContrattoComponent implements OnInit {

  constructor(private tables:TableServiceGet) { }
  colonne_contratto: string[] = ['CF','codice_appartamento', 'canone_mensile', 'durata_soggiorno', 'n_persone']
  contratto: any
  ngOnInit(): void {
    this.tables.getContratto().subscribe(contratto=>{
      this.contratto = contratto
    })
  }

}
