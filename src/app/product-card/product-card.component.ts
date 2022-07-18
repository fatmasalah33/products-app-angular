import { Component, OnInit ,Input, Output, EventEmitter  } from '@angular/core';
import { Product } from '../interfaces/product';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import {CartService} from '../services/cart.service'
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  cardName : string = 'product Card';
    productscard : Array<Product> = [];
   
  @Input() product: Product = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
    rate: 3.9,
    count: 120
    }
  };
  productDetails: Product | undefined = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
    rate: 3.9,
    count: 120
    }
  };
  @Output() alertproductName = new EventEmitter<string>();
  constructor(private _CartService: CartService,private router: Router,private activatedRoute: ActivatedRoute,private productsService :ProductsService) { 
   
  }

  ngOnInit(): void {
    this.productsService.getProductsList().subscribe((data : any) => {
      this.productscard = data;
     
      });
  }
  emitProductName(){
    this.alertproductName.emit(this.product.title);
  }
  emitName(){
    alert('he')
  }
  
  goToDetails(id : number) {
    // this.router.navigate(['/product-details' , id]);

    this.productDetails = this.productscard.find(
      (product) => product.id == id)

      // console.log(this.productDetails)
      this._CartService.addItem(this.productDetails)
  }
  

}
