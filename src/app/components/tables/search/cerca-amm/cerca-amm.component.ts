import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AmministratoreService } from 'src/app/services/get/amministratore.service';

@Component({
  selector: 'app-cerca-amm',
  templateUrl: './cerca-amm.component.html',
  styleUrls: ['./cerca-amm.component.sass']
})
export class CercaAmmComponent implements OnInit {

  constructor(private amm:AmministratoreService) { }

  cercaAmm(form:NgForm):void {
    console.log(form.value)
    this.amm.getAmministratore(form).subscribe(array=>{
      console.log(array)
    })
  }

  ngOnInit(): void {
  }

}
