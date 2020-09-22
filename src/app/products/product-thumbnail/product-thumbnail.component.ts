import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styles: []
})
export class ProductThumbnailComponent implements OnInit {

  constructor() {    
  }

  @Input('productDetails') product:any;
  @Output('pd') parentData:EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  SendToParent(){
    let name = prompt("Enter Name");
    this.parentData.emit(name);
  }
  
}
