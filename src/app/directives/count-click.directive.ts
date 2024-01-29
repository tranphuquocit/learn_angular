import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { InfoClick, InfoHover } from "../info-click.model";
import { LocalStorageService } from "../local-storage.service";
import { count } from 'rxjs';

@Directive({
  selector: '[appCountClick]'
})

export class CountClickDirective implements OnChanges{

  infoClick: InfoClick = {
    count: 0,
    listTimeClick: []
  }

  infoHover: InfoHover = {
    count: 0,
    listTimeHover: []
  }

  constructor(private el: ElementRef, private localStorage: LocalStorageService){
    const timeClick = this.localStorage.getData('timeClick');
    // console.log(timeClick);
    if(timeClick) {
      this.infoClick.listTimeClick.unshift(timeClick);
      this.infoClick.count += 1;
    }
    const timeHover = this.localStorage.getData('timeHover');
    if(timeHover) {
      this.infoHover.listTimeHover.unshift(timeHover);
      this.infoHover.count += 1;
    }

    this.localStorage.saveData('timeClick', this.infoClick.listTimeClick.join(', '));
    this.localStorage.saveData('timeHover', this.infoHover.listTimeHover.join(', '));

    const x = this.localStorage.getData('timeClick')
    console.log(x)
  }

  ngOnChanges(changes: SimpleChanges): void {
  //     this.el.nativeElement.innerHTML = `
  //   <span>Times click: span> <br>
  //   <span>Times hover: span>
  //   <div class="history-click" (timeClick)="timeClick()">
  //     <span>Clicked at </span>
  //   </div>
  //   <div class="history-click" (timeHover)="timeHover()">
  //     <span>Hovered at span>
  //   </div>
  // </div>`;

  const x = this.localStorage.getData('timeClick');

  this.el.nativeElement.innerHTML = `<span>${x}</span?`;
  }
}
