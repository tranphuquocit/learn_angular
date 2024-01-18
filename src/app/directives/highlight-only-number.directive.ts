import { Directive, OnChanges, SimpleChanges, Input, ElementRef } from "@angular/core";
import { style } from '@angular/animations';

@Directive({
  selector: '[appHighlightOnlyNumber]'
})

export class HighlightOnlyNumberDirective implements OnChanges{

  @Input() content!: string;
  constructor(private el: ElementRef) {
    // el.nativeElement.innerHTML = '<span style="color: red">Tuan</span>';
  }
  ngOnChanges(changes: SimpleChanges): void {
    const chars = this.content.split(' ');
    var newChars: any = [];
    // console.log(chars);
    chars.forEach(ele => {
      if((+ele + 1) > 0) {
        ele = `<span style="color: red">${ele}</span>`
      }
      newChars.push(ele);
    })
    this.el.nativeElement.innerHTML = newChars.join(' ');
  }
}
