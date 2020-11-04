import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: [
    "./sign-up.component.css"
  ]
})
export class SignUpComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  
  }

  // OnSubmit(form:NgForm){
  //   console.log(form.value);
  // }

  @ViewChild("f") form:NgForm; 
  @ViewChild("firstName") firstName:NgForm; 

  OnSubmit(){
    this.authService.SignUp(this.form.value);
  }

  cities:string[] = [
    "Pune","Mumbai","Bengaluru","Chennai"
  ];

}
