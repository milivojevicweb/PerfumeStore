import { expanded } from './../animations';
import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css'],
  animations:[
    expanded
  ]
})
export class OneProductComponent implements OnInit {
  @Input('title') title:string;
  isExpanded:boolean;

  id
  products
  product
  constructor(private service: ProductsService, private http: HttpClient, private route: ActivatedRoute) {
    this.route.params.subscribe((params : Params) => {
      this.id = +this.route.snapshot.params["id"]
    })
  }

  ngOnInit(): void {
    this.service.getAllProducts().subscribe(
      Response => {
        this.products = Response;
        for(let i=0; i<this.products.length; i++){
          if(this.products[i].id == this.id){
            this.product = this.products[i]
            console.log(this.product)
            break;
          }
        }
      },
      error => {
        alert("Error: " + error)
      }
    )
  }

  toggle(){
    this.isExpanded=!this.isExpanded;
  }

}
