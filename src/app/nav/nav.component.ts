import { NavService } from '../services/nav.service';
import { Nav } from './../nav';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private services:NavService) { }
  public nav:Nav[];
  ngOnInit() {
    this.services.getAll().subscribe(
      (Response:Nav[] )=> {
        this.nav = Response;
      },
      error => {
        alert("Error: " + error)
      }
    )
  }

}
