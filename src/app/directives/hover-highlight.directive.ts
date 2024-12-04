import { Directive,ElementRef,AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
  standalone: true
})
export class HoverHighlightDirective {

  constructor(private el: ElementsRef){}
  ngAfterViewInit():void{
    this.el.nativeElement.focus();
  }

}
