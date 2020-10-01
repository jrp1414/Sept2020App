import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoggerService } from '../application.index';
import { ProductService } from '../Services/product.service';
import { Description, Product } from '../Services/products.data';
import { Person } from './product-thumbnail/product-thumbnail.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls:["./products.component.css"],
  // encapsulation:ViewEncapsulation.None,
  // providers:[{provide:LoggerService,useValue:'logger'}]
})
export class ProductsComponent {
  filterText:string="";
  products:Product[]= [];
  constructor(private logger:LoggerService,private productService:ProductService) { 
    this.products = this.productService.GetProductsList();
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

  AddProduct(){
    var product = 
      new Product(15,"Test Prod","GDN-1414",new Date(1,10,2020),25.52,4,"",false,new Description("Test Description","test@gmail.com"));
    this.productService.AddProduct(product);
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
    this.logger.log(data);    
  } 
}