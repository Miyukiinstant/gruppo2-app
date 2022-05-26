import { Component, OnInit, Output } from '@angular/core';
import { TableServiceGet } from 'src/app/services/table/table.service';

@Component({
  selector: 'app-amministratore',
  templateUrl: './amministratore.component.html',
  styleUrls: ['./amministratore.component.sass']
})
export class AmministratoreComponent implements OnInit {

  constructor(private tables:TableServiceGet) { }
  colonne_amministratore: string[] = ['CF','codice_appartamento', 'nome', 'cognome']
  @Output() amministratore: any
  ngOnInit(): void {
    this.tables.getAmministratore().subscribe(amministratore=>{
      this.amministratore = amministratore
    })
  }

}
