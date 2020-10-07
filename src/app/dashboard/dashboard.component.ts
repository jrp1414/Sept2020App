import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable,Observer } from 'rxjs';
//import {Observable, Subscription}  from 'rxjs/Rx';

@Component({
  selector: 'app-dashboard',
  templateUrl:"./dashboard.component.html",
  styles: []
})
export class DashboardComponent implements OnInit,OnDestroy {

  constructor() { }

  //numSubs:Subscription;
  counter:number;
  timer:string; 
  ngOnInit(): void {
    // let numsObs = Observable.interval(2000).map((num)=>num*2);

    // this.numSubs = numsObs.subscribe((data)=>{
    //   this.counter = data;
    //   this.timer = new Date().toTimeString();

    //   console.log(this.counter+ " "+ this.timer);
    // });

    let obs = new Observable((obs: Observer<string>) => {
        // next function - Will be called when the publisher wants to publish data
        // error function - Will be called when there is any error occured in the publisher
        //complete function - Will be called by the publisher when it wants to stop publising
        setTimeout(() => {
          obs.next("First Data emitted");
        }, 1000);

        setTimeout(() => {
          obs.next("Second Data emitted");
        }, 3000);

        setTimeout(() => {
          obs.next("Third Data emitted");
        }, 5000);

        // setTimeout(() => {
        //   obs.error("Some Error occured");
        // }, 7000);
        setTimeout(() => {
          obs.complete();
        }, 7000);

        setTimeout(() => {
          obs.error("Some Error occured");
        }, 8000);

        setTimeout(() => {
          obs.next("Forth Data emitted");
        }, 9000);
      });

      obs.subscribe((resp)=>{
        console.log(resp);
      },(error)=>{
        console.error(error + new Date().toTimeString());
      },()=>{
        console.warn("Completed");
      });

  }

  ngOnDestroy(): void {
    //this.numSubs.unsubscribe();
  }

}
