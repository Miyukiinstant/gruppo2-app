import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Appartamento } from 'src/app/interfaces/appartamento';
import { TableService } from 'src/app/services/post/postTable.service';

@Component({
  selector: 'app-cerca-amm',
  templateUrl: './cerca-amm.component.html',
  styleUrls: ['./cerca-amm.component.sass']
})
export class CercaAmmComponent implements OnInit {

  constructor(private amm:TableService) { }

  array:any[] = []
  colonne_appartamento: string[] = ['codice_appartamento','codice_palazzo', 'n_locale', 'n_sala', 'metratura', 'costo']
  cercaAmm(form:NgForm):void {
    this.amm.postFormAmm(form).subscribe(array=>{
      this.array = array
    })
  }

  ngOnInit(): void {
  }

}
