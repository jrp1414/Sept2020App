import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(public auth:AuthService,public store:Store<any>) { }
  isAuthenticated:boolean;
  ngOnInit(): void {
    this.store.select("auth").subscribe((auth)=>{
      console.log(auth);
      if(auth){
        this.isAuthenticated  = auth.isAuthenticated;
      }
    });
  }

  OnSubmit(f:NgForm){
    this.auth.SignIn(f.value).subscribe((response)=>{
      localStorage.setItem("token",response.data);
      this.store.dispatch({
        type:"isAuthenticated changed"
      });
    });
  }

  SignOut(){
    localStorage.removeItem("token");
    this.store.dispatch({
      type:"isAuthenticated changed"
    });
  }

}
