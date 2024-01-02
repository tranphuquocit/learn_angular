import { Component , Input} from "@angular/core";
import { ItemModel } from "src/app/models/item.model";

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})

export class TableComponent {

    @Input() listItem!: ItemModel[];

    constructor() {
        // console.log(this.listItem)
    }
    ngOnInit() {}

}