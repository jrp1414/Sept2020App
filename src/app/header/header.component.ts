import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

  OnSubmit(f:NgForm){
    this.auth.SignIn(f.value).subscribe((response)=>{
      console.log(response);
    });
  }

}
