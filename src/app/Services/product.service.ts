import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { Product, products } from './products.data';

@Injectable({
  providedIn:"root"
})
export class ProductService {
  private productsList:Product[] = products;
  constructor(private logger: LoggerService) { }

  GetProductsList():Product[]{
    // I will write some code here and call http service to get the data from my backend DB
    return this.productsList;
  }

  AddProduct(product:Product){
    products.push(product);
  }
}
