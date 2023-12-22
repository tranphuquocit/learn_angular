import { Component , Input} from "@angular/core";
import { UserModel } from "src/app/user.model";

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})

export class ItemComponent {

    @Input() item!: UserModel;
    

    constructor() {
        console.log(this.item)
    }
    ngOnInit() {}

}