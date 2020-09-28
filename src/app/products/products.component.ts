import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Person } from './product-thumbnail/product-thumbnail.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls:["./products.component.css"],
  encapsulation:ViewEncapsulation.None
})
export class ProductsComponent {
  filterText:string="";
  constructor() { 
    
  }

  IdTest(){
    // for (let index = 0; index < this.products.length; index++) {
    //   console.log(this.products[index]);      
    // }

    // function(value){
    //   console.log(value);
    // }
    //()=>{}
    // this.products.forEach((value)=>{
    //   console.log(value);
    // });

    // for (var index in this.products) {
    //   console.log(this.products[index]);
    // }

    for (var product of this.products) {
      console.log(product);
    }
  }

  GetClass(product){
    if (product.starRating>3) {
      // return "ratingMoreThan3 bolder";
      return ["ratingMoreThan3","bolder"];
    }
    return "ratingLessThanOrEqualTo3";
  }
  childData:Person;
  ChildDataReceived(data){
    this.childData = data;
    console.log(this.childData);    
  }

  UpdateProductsList(){
    this.products.push({
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": new Date(2016, 10, 25),
      "description": {
        "descText": "Leaf rake with 48-inch wooden handle.",
        "emailId": "test@test.com"
      },
      "price": 19.95,
      "starRating": 1,
      "currentAvailibility":true,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    });
  }
  //products:any[] = [];
  products:any[] = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": new Date(2016, 10, 25),
      "description": {
        "descText": "Leaf rake with 48-inch wooden handle.",
        "emailId": "test@test.com"
      },
      "price": 19.95,
      "starRating": 1,
      "currentAvailibility":true,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": new Date(2017, 9, 20),
      "description": { "descText": "15 gallon capacity rolling garden cart", "emailId": "test@test.com" },
      "price": 32.99985,
      "starRating": 2,
      "currentAvailibility":false,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": new Date(2016, 10, 25),
      "description": { "descText": "Curved claw steel hammer", "emailId": "test@test.com" },
      "price": 8.9,
      "starRating": 3,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    },
    {
      "productId": 8,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": new Date(2016, 10, 25),
      "description": { descText: "15-inch steel blade hand saw", "emailId": "test@test.com" },
      "price": 11.55787878,
      "starRating": 4,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    },
    {
      "productId": 10,
      "productName": "Video Game Controller",
      "productCode": "GMG-0042",
      "releaseDate": new Date(2016, 10, 25),
      "description": { descText: "Standard two-button video game controller", "emailId": "test@test.com" },
      "price": 35.957878,
      "starRating": 5,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    }
  ];

}


// export enum Test{
//   green,
//   red,
//   blue
// }