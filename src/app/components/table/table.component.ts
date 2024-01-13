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
    this.tempItem = JSON.parse(JSON.stringify(item));
    item.isEdit = true;
  }

  public cancelEditItem(item: ItemModel) {
    item.isEdit = false;
    item.content = this.tempItem.content;
  }

  public saveEditItem(item: ItemModel) {
    item.isEdit = false;
  }

}