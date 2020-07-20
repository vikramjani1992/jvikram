import { Injectable } from '@angular/core';
import {Product} from 'src/app/models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

products : Product[] = [
  new Product(1,"Iphone 5","Product is cool",100),
  new Product(2,"Iphone 6","Product is cool",200),
  new Product(3,"Iphone 6s","Product is cool",250),
  new Product(4,"Iphone 7","Product is cool",300),
  new Product(5,"Iphone 7s","Product is cool",350),
  new Product(6,"Iphone 8","Product is cool",400)
]

  constructor() { }

getProducts() : Product[]{
  //TODO : Populate products from API / Service
  return this.products
}
}
