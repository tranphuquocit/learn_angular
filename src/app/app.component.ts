import { Component } from '@angular/core';
import { ItemModel } from './item.model';
import { ShareService } from './services/shareSv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  listItem: ItemModel[] = [];

  constructor(private service: ShareService) {}
  ngOnInit() {
    this.service.getListItem().subscribe(listItem => this.listItem = listItem);
    console.log(this.listItem)
  }
}
