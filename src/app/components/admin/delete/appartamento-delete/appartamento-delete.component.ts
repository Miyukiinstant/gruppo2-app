import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteRowService } from 'src/app/services/delete/delete-row.service';
import { TableServiceGet } from 'src/app/services/table/table.service';

@Component({
  selector: 'app-appartamento-delete',
  templateUrl: './appartamento-delete.component.html',
  styleUrls: ['./appartamento-delete.component.sass']
})
export class AppartamentoDeleteComponent implements OnInit {

  constructor(private tables:TableServiceGet,private _delete:DeleteRowService, private _matSnackBar:MatSnackBar) { }
  colonne_appartamento: string[] = ['codice_appartamento','codice_palazzo', 'n_locale', 'n_sala', 'metratura', 'costo', 'id']
  appartamento: any
  delete(form:NgForm):void{
    this._delete.deleteRow(form).subscribe(result=>{
      if(result.succesful){
        this._matSnackBar.open('Eliminato ✅',undefined,
        {horizontalPosition:'center',
        verticalPosition:'top'
      ,duration: 2000})
      }
    })
  }
  ngOnInit(): void {
    this.tables.getAppartamenti().subscribe(appartamento=>{
      this.appartamento = appartamento
    })
  }

}
