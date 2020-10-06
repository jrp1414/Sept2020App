import { Component, OnInit } from '@angular/core';
import { ProductService } from '../application.index';

@Component({
  selector: 'app-tp',
  template: `
    <h1>Temp Products</h1>
    <div>{{message}}</div>    
  `,
  styles: [],
  providers:[ProductService]
})
export class TempProductsComponent implements OnInit {

  constructor(private ps:ProductService) { }
  message:string;
  ngOnInit(): void {
    this.ps.productEmitter.subscribe((data)=>{
      this.message = data;
    });
  }

}
