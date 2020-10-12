import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductService } from '../application.index';

@Component({
  selector: 'app-tp',
  template: `
    <h1>Temp Products</h1>
    <div>{{message}}</div>    
  `,
  styles: [],
  // providers:[ProductService]
})
export class TempProductsComponent implements OnInit,OnChanges {

  constructor(private ps:ProductService) { 
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Everytime there is an change to the value of the input.. 
    //This method will be automatically called..
  }
  message:string;
  ngOnInit(): void {
    this.ps.productEmitter.subscribe((data)=>{
      this.message = data;
    });
  }

}
