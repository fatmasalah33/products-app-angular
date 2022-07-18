import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  parentarray:Array <any>=[];
  totalpricearray:Array<any>=[]
  quantityarray:Array<any>=[]
  sum:number=0
  l:number=0
  results:Array<any>=[]
  decreaseQuantity(indexItem: number) {
    if (this.quantityarray[indexItem] > 1)
      this.quantityarray[indexItem]--;
  }

  increaseQuantity(indexItem: number) {
   
      this.quantityarray[indexItem]++;
  }
  ngOnInit(): void {
 
  }
  addItem(newitem: any){
    if(this.parentarray.includes(newitem)){
      alert('the item is aleardy exist')
    }else{
    this.parentarray.push(newitem)
    console.log(this.parentarray)
 
  }
  this.quantityarray[newitem.id]=1
    this.totalpricearray[newitem.id]=newitem.price
    console.log(this.totalpricearray)
    this.results = this.totalpricearray.filter((id: {}) => {
      if (Object.keys(id).length !== 0) {
        return false;
      }
    
      return true;
    });
  this.l=this.results.length
  console.log(this.results.length)
    this.sum += newitem.price
    this.results.reduce((accumulator: any, object: any) => {
      console.log(object)
      return accumulator + object;
    }, 0);
    console.log(this.sum)
  }
}
