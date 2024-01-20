import { slide, fade } from './../animations';
import { Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { HttpClient } from '@angular/common/http';
import 'web-animations-js';
import { animate, style, transition, trigger } from '@angular/animations';
import '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    slide,
    fade
  ]
})
export class HomeComponent implements OnInit {

  products;
  results;

  constructor(private service : ProductsService) { }

  ngOnInit() {

    var datum=new Date();
    var danBroj=datum.getDate();
    var mesec= datum.getMonth();
    var meseci= ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"];
    var dan=document.querySelector("#datumDan");
    var mesecc=document.querySelector("#datumMesec");
    dan.innerHTML=danBroj.toString();
    mesecc.innerHTML=meseci[mesec];

    this.service.getAllProducts().subscribe(
      Response => {
        this.products = Response;
        var array=[];
        for(let item of this.products){
          if(item.slider=="yes"){
            array.push(item);
          }
        }
        this.results=array.slice(Math.max(array.length - 3, 0));
        console.log(this.results);

      },
      error => {
        alert("Error: " + error)
      }
    )
  }




}
