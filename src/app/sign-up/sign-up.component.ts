import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: [
    "./sign-up.component.css"
  ]
})
export class SignUpComponent implements OnInit {
  countries: any[];
  selectedCountry: string;
  constructor(public authService:AuthService) {
    this.countries = [
      {name: 'Australia', code: 'AU'},
      {name: 'Brazil', code: 'BR'},
      {name: 'China', code: 'CN'},
      {name: 'Egypt', code: 'EG'}, 
      {name: 'France', code: 'FR'},
      {name: 'Germany', code: 'DE'},
      {name: 'India', code: 'IN'},
      {name: 'Japan', code: 'JP'},
      {name: 'Spain', code: 'ES'},
      {name: 'United States', code: 'US'}
  ];
   }

  ngOnInit(): void {
  
  }

  // OnSubmit(form:NgForm){
  //   console.log(form.value);
  // }

  @ViewChild("f") form:NgForm; 
  @ViewChild("firstName") firstName:NgForm; 
  values:string[];

  

  OnSubmit(){
    console.log(this.values);
    // this.authService.SignUp(this.form.value).subscribe((response)=>{
    //   console.log(response);
    // });
  }

  cities:string[] = [
    "Pune","Mumbai","Bengaluru","Chennai"
  ];

}
