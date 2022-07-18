import { Component, OnInit } from '@angular/core';
import {CartService} from '../services/cart.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _CartService: CartService) { }
  results:any=this._CartService.parentarray;
  ngOnInit(): void {
    
  }
  


}
