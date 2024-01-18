import { Directive, OnChanges, SimpleChanges, Input, ElementRef } from "@angular/core";

@Directive({
  selector: '[appConvertNumber]'
})

export class ConvertNumberDirective implements OnChanges{

  @Input() content!: string;

  constructor(private el: ElementRef) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Cach 1------------------------------------------
    const chars = this.content.split('');
    var tempChars: any = [];
    var newChars: any = [];// array chưa reverse

    for(let idx = chars.length - 1; idx >=0; idx--) {
      // console.log(idx)

      tempChars.push(chars[idx]);

      if(tempChars.length == 3) {
        if((+idx) != 0) {
          const x = tempChars.join('');
          newChars.push(x);
          newChars.push(',');
          tempChars = [];
        }
        else {
          const y = tempChars.reverse().join('');
          newChars.push(y);
          tempChars = [];
        }
      }
      if(idx == 0) {
        const z = tempChars.reverse().join('');
        newChars.push(z);
      }
    }
    console.log(newChars)
      this.el.nativeElement.innerHTML = `<span>${newChars.reverse().join('')}</span?`;


    //Cach 2 ------------------------------------------------------
    // const x = Number(this.content).toLocaleString();
    // console.log(x)
    // this.el.nativeElement.innerHTML = `<span>${x}</span?`;


    //Cach 3------------------------------------------
    // const chars = this.content.split('');
    // // [9, 0, 0, 0, 0, 0, 0]
    // // [1,0,0,0,0,0]
    // const reverseChars = chars.reverse();
    // // [0, 0, 0, 0, 0, 0, 9] => [0, 0, ,0, 0, 0, ,0, 9]
    // // [0,0,0,0,0,1] => [0, 0, .0, 0, 0, 1]
    // for(let idx in reverseChars) {
    //   if(((+idx + 1) % 3) == 0 && ((+idx + 1) < reverseChars.length)) {
    //     reverseChars[idx] = ',' + reverseChars[idx];
    //   }
    // }
    // const newChars = reverseChars.reverse().join('');
    // // [9 ,0 0 0 ,0 0 0]
    // // [1 0 0 .0 0 0]
    // // console.log(newChars);
    // this.el.nativeElement.innerHTML = `<span>${newChars}</span?`;
  }
}
