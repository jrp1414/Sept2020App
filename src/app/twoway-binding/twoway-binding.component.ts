import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tb',
  templateUrl: './twoway-binding.component.html',
  styles: []
})
export class TwowayBindingComponent {

  constructor() { }
  OneWayMessage: string = "";
  OneWayBinding(data) {
    this.OneWayMessage = data.target.value;
  }

  OneWayFailTest(){
    this.OneWayMessage = "One way fails.";
  }


  TwoWayMessage: string = "";
  TwoWayTest(){
    this.TwoWayMessage = "Two Way test.";
  }

  TwoWayMessageChange(data:string){
    this.TwoWayMessage = data.toUpperCase();
  }
}
