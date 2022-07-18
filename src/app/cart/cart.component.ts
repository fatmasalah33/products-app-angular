import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import {CartService} from '../services/cart.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  
  constructor(private _CartService: CartService) { }
x:any=this._CartService.parentarray;
quantity:number=1
total:number=0;
i:number=0
z:any=this._CartService.quantityarray;
y:any=this._CartService.totalpricearray;
sum:number=this._CartService.sum
totalprice:number=0;
s:number=this._CartService.l
results:any=this._CartService.results
  ngOnInit(): void {
    this.total=this.z[this.x.id]*this.x.price
    this.y[this.x.id]=this.total
    
    console.log(this.y)
    console.log(this.y)
    this.results = this.y.filter((id: {}) => {
      if (Object.keys(id).length !== 0) {
        return false;
      }
    
      return true;
    });
  
    this.sum = this.results.reduce((accumulator: any, object: any) => {
      console.log(object)
      return accumulator + object;
    }, 0);
  }
  decreaseQuantity(id: number,price:number) {
    this._CartService.decreaseQuantity(id);
    if(this.z[id]>0){
    this.total=this.z[id]*price
    this.y[id]=this.total
    
    console.log(this.y)
    console.log(this.y)
    this.results = this.y.filter((id: {}) => {
      if (Object.keys(id).length !== 0) {
        return false;
      }
    
      return true;
    });
  
    this.sum = this.results.reduce((accumulator: any, object: any) => {
      console.log(object)
      return (accumulator - object);
    }, 0);
    this.sum=this.sum*-1
    console.log(this.sum)
  }
  }

  increaseQuantity(id: number,price:number) {
    this._CartService.increaseQuantity(id);
    this.total=this.z[id]*price
    this.y[id]=this.total
    
    console.log(this.y)
    console.log(this.y)
    this.results = this.y.filter((id: {}) => {
      if (Object.keys(id).length !== 0) {
        return false;
      }
    
      return true;
    });
  
    this.sum = this.results.reduce((accumulator: any, object: any) => {
      console.log(object)
      return accumulator + object;
    }, 0);
    console.log(this.sum)
  }
  // hquantity(value:any,price:number,id:number){
    
  //   this.total=parseInt(value)*price
  //   this.y[id]=this.total
    
  //   // console.log(this.y)
  //   this.results = this.y.filter((id: {}) => {
  //     if (Object.keys(id).length !== 0) {
  //       return false;
  //     }
    
  //     return true;
  //   });
  
  //   this.sum = this.results.reduce((accumulator: any, object: any) => {
  //     // console.log(object)
  //     return accumulator + object;
  //   }, 0);
  //   // console.log(this.sum)
  //   this.s=this.results.length
  // }
  
  deleteElement(product:any,id:number){
    console.log(product)
    let index =this.x.indexOf(product)
    this.x.splice(index,1)
    console.log(this.x)
    // this.y.filter((elem: { id: number; }) => elem.id !== product.id);

    delete this.y[id];
    
    console.log(this.y)
    this.results = this.y.filter((id: {}) => {
      if (Object.keys(id).length !== 0) {
        return false;
      }
    
      return true;
    });
  
    this.sum = this.results.reduce((accumulator: any, object: any) => {
      console.log(object)
      return accumulator + object;
    }, 0);
    console.log(this.sum)
    this.s=this.results.length
  }
}
