import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.sass']
})
export class GroupComponent implements OnInit {

  constructor(private router:Router) { }

  routes: any

  ngOnInit(): void {
    this.routes=this.router.config
  }

}
