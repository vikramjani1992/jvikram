import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  cartItems : any;

  constructor() {
   
}

  ngOnInit(): void {
   this.cartItems = history.state.data;
   console.log(this.cartItems)
  }
  calcTotal() {
    return this.cartItems.reduce((acc, item) => acc+= (item.quantity * item.price) ,0)
  }

}
