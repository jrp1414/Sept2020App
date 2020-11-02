import { TemplateParseResult } from '@angular/compiler';
import { Component } from '@angular/core';
import {ProductService, StudentService } from './service.index';

@Component({
  // selector: 'app-main',
  // selector: '[app-main]',
  selector: '.app-main',
  // template:"<h1>Inline Template Example</h1>"+
  // "<h2>Inline Template Example 2</h2>"+
  // "<h3>Header 3</h3>"  
  // template:`
  // <h1>Multiple Line Temple Example</h1>
  // <h2>Multiple Line Temple Example</h2>
  // <h3>Multiple Line Temple Example</h3>
  // `
  templateUrl:"./app.component.html",
  // styles:[
  //   `h1{background-color:yellow}`,
  //   `h2{background-color:blue}`
  // ]
  styleUrls:[
    './app.component.css'
  ],
  providers:[ProductService]
})
export class AppComponent {
  
  constructor(public ss:StudentService) {
    
  }  
}
