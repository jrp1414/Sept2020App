import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[better-highlight]'
})
export class BetterHighlightDirective implements OnInit {

  // @Input() bgColor:string;
  // @Input('better-highlight') bgColor:string;
  @Input('better-highlight') bgColorDefault:string;
  @Input('highlight') bgColorHightlight:string;

  constructor(public el:ElementRef) { }
  ngOnInit(): void {
    // this.el.nativeElement.style.backgroundColor = this.bgColor;
    this.el.nativeElement.style.backgroundColor = this.bgColorDefault;
  }

  @HostListener('mouseenter') onMouseEntered(){
    this.el.nativeElement.style.backgroundColor = this.bgColorHightlight;
  }

  @HostListener('mouseleave') onMouseLeft(){
    this.el.nativeElement.style.backgroundColor = this.bgColorDefault;
  }

  @HostListener('click') onClick(){
    alert("Clicked Here");
  }
}
