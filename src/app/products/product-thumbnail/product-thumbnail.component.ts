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
  @Output('pd') parentData:EventEmitter<Person> = new EventEmitter<Person>();

  ngOnInit(): void {
  }

  SendToParent(){
    var person = new Person();
    person.name = prompt("Enter Name");
    person.age = parseInt(prompt("Enter Age"));
    this.parentData.emit(person);
  }
  
}


export class Person {
 name:string;
 age:number;
}