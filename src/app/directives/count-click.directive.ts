import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from "@angular/core";
import { InfoClick, InfoHover } from "../info-click.model";
import { LocalStorageService } from "../local-storage.service";

@Directive({
  selector: '[appCountClick]'
})

export class CountClickDirective implements OnChanges{

  countClick: number = Number(this.localStorage.getData('countClick'));
  countHover: number = Number(this.localStorage.getData('countHover'));
  listTimeClick = this.localStorage.getData('listTimeClick')?.split(', ');
  listTimeHover = this.localStorage.getData('listTimeHover')?.split(', ');

  constructor(private el: ElementRef, private localStorage: LocalStorageService){
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.countClick)
    console.log(this.listTimeClick)
    this.el.nativeElement.innerHTML = `
    <span>Times click: span> <br>
    <span>Times hover: span>
    <div class="history-click" (timeClick)="timeClick()">
      <span>Clicked at </span>
    </div>
    <div class="history-click" (timeHover)="timeHover()">
      <span>Hovered at span>
    </div>
  </div>`;
  }
}
