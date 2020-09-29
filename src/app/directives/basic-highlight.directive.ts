import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
 selector:"[basic-highlight]"   
})
export class BasicHighlightDirective implements OnInit {
    // private el:ElementRef;
    // constructor(_el:ElementRef) {
    //     this.el = _el;
    // }

    constructor(private el:ElementRef) {        
    }
    ngOnInit(): void {
        this.el.nativeElement.style.backgroundColor = "yellow";
    }
}