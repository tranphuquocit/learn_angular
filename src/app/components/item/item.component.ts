import { Component , Input} from "@angular/core";
import { ItemModel } from "src/app/item.model";

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})

export class ItemComponent {

    @Input() item!: ItemModel;

    constructor() {}
    ngOnInit(){}

}