import { Component , Input} from "@angular/core";
import { ItemModel } from "src/app/models/item.model";
import { ShareService } from "src/app/services/shareSv.service";

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})

export class ItemComponent {

    @Input() item!: ItemModel;
    private listItem: ItemModel[] = [];
    public isEdit: boolean = false;
    public tempEditItem!: ItemModel;
    public tempItem!: ItemModel;

    constructor(private service: ShareService) {}
    ngOnInit(){
        this.service.getListItem().subscribe(res => this.listItem = res);
    }

    public editItem() {
        this.item.isEdit = true;
        this.isEdit = this.item.isEdit;
        this.tempItem = JSON.parse(JSON.stringify(this.item));
        // console.log(this.tempItem);
        // console.log(this.tempEditItem);
    }

    public deleteItem() {
        const listItemTemp = this.listItem.filter(ele => ele.stt !== this.item.stt);
        for(let index in listItemTemp) {
            listItemTemp[index].stt = Number(index) + 1;
        }
        this.listItem = listItemTemp;
        this.service.setListItem(this.listItem);
    }

    public cancelItem() {
        this.item.isEdit = false;
        this.isEdit = false;
        this.item = this.tempItem;
    }

    public saveItem() {
        

        this.isEdit = false;
    }

}