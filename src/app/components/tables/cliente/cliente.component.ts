import { Component, OnInit } from '@angular/core';
import { TableServiceGet } from 'src/app/services/table/table.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.sass']
})
export class ClienteComponent implements OnInit {

  constructor(private tables:TableServiceGet) { }
  colonne_cliente: string[] = ['CF_cliente','nome', 'cognome']
  cliente: any
  ngOnInit(): void {
    this.tables.getCliente().subscribe(cliente=>{
      this.cliente = cliente
    })
  }

}
