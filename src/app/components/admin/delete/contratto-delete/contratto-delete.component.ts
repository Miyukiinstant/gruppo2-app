import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteRowService } from 'src/app/services/delete/delete-row.service';
import { TableServiceGet } from 'src/app/services/table/table.service';

@Component({
  selector: 'app-contratto-delete',
  templateUrl: './contratto-delete.component.html',
  styleUrls: ['./contratto-delete.component.sass']
})
export class ContrattoDeleteComponent implements OnInit {

  constructor(private tables:TableServiceGet,private _delete:DeleteRowService, private _matSnackBar:MatSnackBar) { }
  colonne_contratto: string[] = ['CF','codice_appartamento', 'canone_mensile', 'durata_soggiorno', 'n_persone', 'id']
  contratto: any
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
    this.tables.getContratto().subscribe(contratto=>{
      this.contratto = contratto
    })
  }

}
