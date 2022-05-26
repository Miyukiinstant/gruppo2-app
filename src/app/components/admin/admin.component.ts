import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteRowService } from 'src/app/services/delete/delete-row.service';
import { LoginService } from 'src/app/services/login/login.service';
import { TableService } from 'src/app/services/post/postTable.service';
import { TableServiceGet } from 'src/app/services/table/table.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass'],
  
})
export class AdminComponent implements OnInit {

  constructor(private post:TableService, private tableApp:TableServiceGet, private login:LoginService, private _matSnackBar:MatSnackBar, private _delete:DeleteRowService) { }
  arrayOptions:any
  palazzoList:any
  appartamentoList:any
  amministratoreList:any
  contrattoList:any
  selectedIndex:string = ''
  item = {
    date:Date
  }
  tipiIm = ['Palazzo','Appartamento','Amministratore','Contratto']
  selected: Date | undefined
  codice_palazzo:number[] = []
  codice_appartamento:number[] = []
  ngOnInit(): void {
    this.tableApp.getPalazzo().subscribe(app=>{
      app.map(value=>{
        this.codice_palazzo.push(value.codice_palazzo)
      })
    })  
    this.tableApp.getAppartamenti().subscribe(app=>{
        app.map(value=>{
          this.codice_appartamento.push(value.codice_appartamento)
        })
    })
    this.fillSelectOptions()
  }

  logout(): void{
    this.login.logout().subscribe();
  }
  deleteThisRow(form:NgForm): void{
    this._delete.deleteRow(form).subscribe(result=>{
      if(result.succesful){
        this._matSnackBar.open('Eliminato ✅',undefined,
        {horizontalPosition:'center',
        verticalPosition:'top'
      ,duration: 2000})
      this.fillSelectOptions()
      }
    })
  }
  fillSelectOptions():void{
    this.palazzoList = []
    this.appartamentoList = []
    this.amministratoreList = []
    this.contrattoList = []
    this.tableApp.getPalazzo().subscribe(app=>{
      app.map(value=>{
        this.palazzoList.push(value.codice_palazzo)
      })
    })  
    this.tableApp.getAppartamenti().subscribe(app=>{
        app.map(value=>{
          this.appartamentoList.push(value.codice_appartamento)
        })
    })
    this.tableApp.getAmministratore().subscribe(ammin=>{
      ammin.map(value=>{
        this.amministratoreList.push(value.CF)
      })
    })
    this.tableApp.getContratto().subscribe(contrat=>{
      contrat.map(value=>{
        this.contrattoList.push(value.CF)
      })
    })
  }
  postTable(form:NgForm):void {
    this.post.postForm(form).subscribe(value=>{
      if(!value.succesful){
        this._matSnackBar.open('Invio fallito ❌',undefined,
        {horizontalPosition:'center',
        verticalPosition:'top',
        duration:2000},)
        this.fillSelectOptions()
      }
      this._matSnackBar.open('Inviato con successo ✅',undefined,
        {horizontalPosition:'center',
        verticalPosition:'top',
        duration:2000},)
        this.fillSelectOptions()
    })   
  }
  selectionChange(value:string):void{
    this.selectedIndex = value
    switch (value) {
      case 'palazzo':
        this.arrayOptions = this.palazzoList
        break;
      case 'appartamento':
        this.arrayOptions = this.appartamentoList
        break;
      case 'amministratore':
        this.arrayOptions = this.amministratoreList
        break;
      case 'contratto':
        this.arrayOptions = this.contrattoList
        break;
    }
  }

}
