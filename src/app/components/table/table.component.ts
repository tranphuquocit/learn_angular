import { Component, Input } from "@angular/core";
import { ItemModel } from "src/app/models/item.model";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent {

  public item!: ItemModel;
  public tempItem!: ItemModel;
  @Input() listItem!: ItemModel[];

  constructor() {}
  ngOnInit() { }

  public editItem(item: ItemModel) {
    item.isEdit = true;
    this.tempItem = JSON.parse(JSON.stringify(item));
  }

  public cancelEditItem(item: ItemModel) {
    item.content = this.tempItem.content;
    item.level = this.tempItem.level;
    item.isEdit = false;
  }

  public saveEditItem(item: ItemModel) {
    item.isEdit = false;
    item.content = this.item.content;
    item.level = this.item.level;
  }
}
