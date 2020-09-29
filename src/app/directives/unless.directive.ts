import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[unless]'
})
export class UnlessDirective {

  constructor(private templateRef:TemplateRef<any>,private vc:ViewContainerRef) { }

  @Input("unless") set value(condition:boolean){
    if(condition){
      this.vc.clear();
    }else{
      this.vc.createEmbeddedView(this.templateRef);
    }
  }

}
