import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eb',
  templateUrl: './event-binding.component.html',
  styles: []
})
export class EventBindingComponent {

  message:string="Hello World!!";

  constructor() { }

  clickedButton(){
    // console.log("Button Clicked");
    let name = prompt("Enter your name");
    this.message = "Hello "+name; 
  } 

  doubleClickedButton(){
    alert("You double clicked the button");
  }

  inputText:string="";

  textChanges(data){
    // console.log(data);
    this.inputText = data.target.value;
  }
}
