import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-ads',
  templateUrl: './advertise.component.html',
  styleUrls: ['./advertise.component.scss']
})

export class AdsComponent {

  @Input() imgUrl!: string;

  constructor() {
  }
}
