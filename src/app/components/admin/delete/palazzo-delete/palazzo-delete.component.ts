import { Component, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteRowService } from 'src/app/services/delete/delete-row.service';
import { TableServiceGet } from 'src/app/services/table/table.service';

@Component({
  selector: 'app-palazzo-delete',
  templateUrl: './palazzo-delete.component.html',
  styleUrls: ['./palazzo-delete.component.sass']
})
export class PalazzoDeleteComponent implements OnInit {

  constructor(private tables:TableServiceGet,private _delete:DeleteRowService,  private _matSnackBar:MatSnackBar) { }
  colonne_palazzo: string[] = ['codice_palazzo','n_palazzo', 'piano', 'n_appartamenti', 'indirizzo', 'id']
  @Input() palazzo:any
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
    
  }

}
