import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from "@angular/core";

@Directive({
  selector: '[appHighlight]'
})

export class AppHighlightDirective implements OnChanges{

  @Input() level: string = '';
  @Input() content!: string;


  constructor(private el: ElementRef) {
    // console.log(this.level);

  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes['level']);
    // console.log(changes);
    // if(this.level && changes)

    // if(changes.level) {
    //   switch(changes['level'].currentValue) {
    //     case 'High': {
    //       this.el.nativeElement.style.backgroundColor = 'red';
    //       break;
    //     }
    //     case 'Medium': {
    //       this.el.nativeElement.style.backgroundColor = 'yellow';
    //       break;
    //     }
    //     case 'Small': {
    //       this.el.nativeElement.style.backgroundColor = 'pink';
    //       break;
    //     }
    //   }
    // }

    // if(changes['content'].currentValue) {
    //   console.log(changes['content'].currentValue);
    //   if(changes['content'].currentValue.includes('50') || changes['content'].currentValue.includes('100')) {
    //     this.el.nativeElement.style.color = 'red';
    //   }
    // }
  }
}
