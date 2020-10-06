import { EventEmitter, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { Product, products } from './products.data';

@Injectable()
export class ProductService {
  private productsList:Product[] = products;
  constructor(private logger: LoggerService) { }

  GetProductsList():Product[]{
    // I will write some code here and call http service to get the data from my backend DB
    return this.productsList;
  }

  GetProductsDetails(id:number):Product{
    // I will write some code here and call http service to get the data from my backend DB
    return this.productsList.find((prod)=>prod.productId==id);
  }

  AddProduct(product:Product){
    products.push(product);
  }

  productEmitter:EventEmitter<string> = new EventEmitter<string>();
}
