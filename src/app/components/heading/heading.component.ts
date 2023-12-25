import { Component, Input } from "@angular/core";
import { ItemModel } from "src/app/item.model";
import { ShareService } from "src/app/services/shareSv.service";

@Component({
    selector: 'app-heading',
    templateUrl: './heading.component.html',
    styleUrls: ['./heading.component.scss']
})

export class HeadingComponent {

    @Input() stringSearchKey!: string;
    @Input() stringSort!: string;
    // @Input() stringAddItem!: string;
    // @Input() levelItem!: string;
    public item: ItemModel = {
        stt: 0,
        level: '',
        content: ''
    };
    private listItem: ItemModel[] = [];

    constructor(private service: ShareService) {}
    ngOnInit() {
        this.service.getListItem().subscribe(listItem => this.listItem = listItem);

    }

    public clear(string: string) {
        if(string === 'search') {
            this.stringSearchKey = '';
        } 
        else if(string === 'add') {
            this.item.content = '';
            this.item.level = ''
        } 
    }

    public addItem() {
        this.item.stt = this.listItem.length - 1 + 1;
        // this.item.level = this.levelItem;
        // this.item.content = this.stringAddItem;
        // this.item.stt = 6;
        // this.item.level = 'test';
        // this.item.content = 'tuandz test';

        this.listItem.push(this.item);
        this.item = {
            stt: 0,
            level: '',
            content: ''
        }
        this.service.setListItem(this.listItem);
    }
}