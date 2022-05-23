import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { TableService } from 'src/app/services/post/postTable.service';
import { TableServiceGet } from 'src/app/services/table/table.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass'],
  
})
export class AdminComponent implements OnInit {

  constructor(private post:TableService, private tableApp:TableServiceGet, private login:LoginService) { }

  postTable(form:NgForm):void {
      console.log(form.value)
      this.post.postForm(form).subscribe(value=>{
        console.log(value)
      })    
  }
  item = {
    date:Date
  }
  selected: Date | undefined
  codice_palazzo:number[] = []
  codice_appartamento:number[] = []
  ngOnInit(): void {
      this.tableApp.getAppartamenti().subscribe(app=>{
        app.map(value=>{
          this.codice_appartamento.push(value.codice_appartamento)
        })
      })
      this.tableApp.getPalazzo().subscribe(app=>{
        app.map(value=>{
          this.codice_palazzo.push(value.codice_palazzo)
        })
      })
  }

  logout(): void{
    this.login.logout().subscribe();
  }

}
