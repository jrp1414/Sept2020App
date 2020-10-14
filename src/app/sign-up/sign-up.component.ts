import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: [
    "./sign-up.component.css"
  ]
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }

  // OnSubmit(form:NgForm){
  //   console.log(form.value);
  // }

  @ViewChild("f") form:NgForm; 
  @ViewChild("firstName") firstName:NgForm; 

  OnSubmit(){
    console.log(this.firstName);
  }

  cities:string[] = [
    "Pune","Mumbai","Bengaluru","Chennai"
  ];

}
