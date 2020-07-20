import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessengerService } from 'src/app/services/messenger.service'
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];

  cartTotal = 0;
  constructor(private msg:MessengerService,private router : Router) { }

  ngOnInit(): void {

    this.msg.getMsg().subscribe((product: Product) => {
    this.addProductToCart(product)
  })

}

addProductToCart(product : Product){

let productExists = false;

for(let index in this.cartItems){
  if(this.cartItems[index].productId === product.id){
    this.cartItems[index].quantity++
    productExists =true;
    break;
  }
}

if(!productExists)
{
  this.cartItems.push({
    productId : product.id,
    productTitle : product.title,
    quantity : 1,
    price : product.price
  })
}
this.calculateTotal()
}

removeFromCart(product)
{
  var index = this.cartItems.indexOf(product);
  this.cartItems.splice(index,1);
  this.calculateTotal();
}

reduceQuanity(single)
{
  single.quantity--;
  this.calculateTotal()
  
}

increaseQuanity(single)
{
  single.quantity++;
  this.calculateTotal()
}
calculateTotal(){
  
this.cartTotal = 0;

this.cartItems.forEach(item=> {
  this.cartTotal+=(item.quantity*item.price)
  })
}

goToCheckOut(){
  this.router.navigateByUrl('/checkout',{state:{data : this.cartItems}})
}

}
