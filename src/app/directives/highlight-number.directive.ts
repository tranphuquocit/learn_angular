import { style } from "@angular/animations";
import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from "@angular/core";

@Directive({
  selector: '[highlightNumber]'
})

export class HighlightNumberDirective implements OnChanges{
  @Input() content!: string;

  constructor(private el: ElementRef) {
    // console.log(this.content);

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.content);
    if(this.content.includes('50') || this.content.includes('100')) {
      this.el.nativeElement.style.color = 'red';
    }

    const regex = /[0-9]/g;
    const found = this.content.match(regex);

    if(found && found.length >= 0) {
      this.el.nativeElement.style.color = 'red';
    }
  }
}
