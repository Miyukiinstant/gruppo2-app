import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteRowService } from 'src/app/services/delete/delete-row.service';
import { TableServiceGet } from 'src/app/services/table/table.service';

@Component({
  selector: 'app-amministratore-delete',
  templateUrl: './amministratore-delete.component.html',
  styleUrls: ['./amministratore-delete.component.sass'],
})
export class AmministratoreDeleteComponent implements OnInit {

  constructor(private tables:TableServiceGet,private _delete:DeleteRowService, private _matSnackBar:MatSnackBar) { }
  colonne_amministratore: string[] = ['CF','codice_appartamento', 'nome', 'cognome', 'id']
  amministratore: any
  delete(form:NgForm):void{
    this._delete.deleteRow(form).subscribe(result=>{
      if(result.succesful){
        this._matSnackBar.open('Eliminato ✅',undefined,
        {horizontalPosition:'center',
        verticalPosition:'top'
      ,duration: 2000})
      this.ngOnInit()
        return
      }
      this._matSnackBar.open('Eliminazione fallita ❌',undefined,
        {horizontalPosition:'center',
        verticalPosition:'top'
      ,duration: 2000})
    })
  }
  ngOnInit(): void {
    this.tables.getAmministratore().subscribe(amministratore=>{
      this.amministratore = amministratore
    })
  }

}
