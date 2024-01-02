import { Component, Input } from "@angular/core";
import { ShareService } from "src/app/services/shareSv.service";
import { ItemModel } from "src/app/models/item.model";

@Component({
    selector: 'app-heading',
    templateUrl: './heading.component.html',
    styleUrls: ['./heading.component.scss']
})

export class HeadingComponent {

    //string input
    @Input() stringSearchKey!: string;
    //string input
    @Input() stringSort: string = 'Sort By';
    public item: ItemModel = {
        stt: 0,
        level: '',
        content: ''
    };
    //list item from service
    private listItem: ItemModel[] = [];
    //array tạm lưu list item ban đầu
    private listItemTemp: ItemModel[] = [];
    //array item found
    private listItemSearch: ItemModel[] = [];

    constructor(private service: ShareService) {
        this.service.getListItem().subscribe(listItem => {
            if(listItem && listItem.length > 0) {
                this.listItem= listItem;
            }
        });
    }
    ngOnInit() {
    }

    public clear() {
        // this.listItemTemp = JSON.parse(JSON.stringify(this.listItem));//clone list item ban dau
        if(this.stringSearchKey) {
            this.stringSearchKey = '';//reset input
            this.service.setListItem(this.listItemTemp);//reset list item
            this.listItemSearch = [];
        }
    }

    public search() {
        this.listItemTemp = JSON.parse(JSON.stringify(this.listItem));//clone list item ban dau
        if(this.stringSearchKey) {
            for(let item of this.listItem) {
                if(this.substringSearch(item.content || '', this.stringSearchKey)) {
                    this.listItemSearch.push(item);
                }
            }
        }
        this.service.setListItem(this.listItemSearch);
    }

    public addItem() {
        this.item.stt = this.listItem.length + 1;
        this.listItem.push(this.item);
        this.service.setListItem(this.listItem);
        this.resetAddItem();
    }
    
    public cancelItem() {
        this.resetAddItem();
    }

    public submitItem() {
    }

    private resetAddItem() {
        this.item = {
            stt: 0,
            level: '',
            content: ''
        };
    }

    private substringSearch(text: string, query: string): boolean {
        const textLower = (text || '').toLowerCase();
        const queryLower = (query || '').toLowerCase();
    
        return textLower.includes(queryLower);//check substring
    }
    
    public sort() {
        let listNum: any = [];
        let listString: any = [];
        let listArranged: any = [];
        this.listItem.forEach(ele => {
            if (ele.content && ele.content[0] && Number(ele.content[0]) >= 0 && Number(ele.content[0]) <= 9) {
                listNum.push(ele);
            }
            else {
                listString.push(ele);
            }
        })
        listNum.sort();
        listString.sort();
        listArranged = listString.concat(listNum);
        console.log(listArranged)

        for(let item of this.listItem) {
            if(item.content && item.content[0] == listArranged[0]) {
                this.listItem[0] = item;
            }
            if(item.content && item.content[0] == listArranged[1]) {
                this.listItem[1] = item;
            }
            if(item.content && item.content[0] == listArranged[2]) {
                this.listItem[1] = item;
            }
            if(item.content && item.content[0] == listArranged[3]) {
                this.listItem[2] = item;
            }
            if(item.content && item.content[0] == listArranged[4]) {
                this.listItem[3] = item;
            }

        }

        
        // this.listItem = listArranged;
        this.service.setListItem(this.listItem)
    }
}
