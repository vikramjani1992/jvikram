export class Product {
    id : number;
    title : string;
    description : string;
    price : number;
    imageUrl : string;

   constructor(id,title,description,price,imageurl="/assets/iphone.jpg") {
  this.id = id;
  this.title = title;
  this.price = price;
  this.description = description;
  this.imageUrl = imageurl;
   }
}
