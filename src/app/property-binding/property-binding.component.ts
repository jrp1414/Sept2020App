import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pb',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {

  imageUrl:string = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png";
  imageWidth="100";
  imageHeight="100";
  buttonDisabled=true;
  
  constructor() { 
    setTimeout(()=>{
      this.buttonDisabled = false;
    },5000);
  }

}
