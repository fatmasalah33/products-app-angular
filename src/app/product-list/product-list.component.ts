import { Component, OnInit, ViewChild  } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import  productss  from "../../assets/products.json";
import {Product} from "../interfaces/product";
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @ViewChild(ProductCardComponent) cardComponent: any;
  products : Array<Product> = [];
  
  constructor(private productsService :ProductsService) { }

 
  ngOnInit(): void {
    this.productsService.getProductsList().subscribe((data : any) => {
      this.products = data;
     
      });
    };
  
  // ngAfterViewInit() {
  //   console.log(this.cardComponent.cardName);
  // }

  alertProductName(productName: string) {
    alert(productName);
  }
}
