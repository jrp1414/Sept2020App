import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styles: []
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  OnSubmit(form:NgForm){
    console.log(form.value);
  }

}
