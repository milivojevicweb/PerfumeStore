import { ProductsService } from '../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products;
  constructor(private service : ProductsService) { }

  ngOnInit() {
    this.service.getAllProducts().subscribe(
      Response => {
        this.products = Response;
      },
      error => {
        alert("An error has occured. Please contact support team. Error: " + error)
      }
    )
  }
}
