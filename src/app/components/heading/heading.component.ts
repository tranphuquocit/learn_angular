import { Component, Input } from "@angular/core";
import { ShareService } from "src/app/services/shareSv.service";
import { ItemModel } from "src/app/models/item.model";
import { of } from 'rxjs'
import { map } from 'rxjs/operators'

@Component({
    selector: 'app-heading',
    templateUrl: './heading.component.html',
    styleUrls: ['./heading.component.scss']
})

export class HeadingComponent {

    //string input
    @Input() stringSearchKey!: string;
    //string sortby
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
        if(!this.item.content || !this.item.level) {
          alert('Nhập đầy đủ thông tin trước khi thêm!')
        }
        else {
          this.item.stt = this.listItem.length + 1;
          this.listItem.push(this.item);
          this.service.setListItem(this.listItem);
          this.resetAddItem();
        }
    }

    public cancelItem() {
        this.resetAddItem();
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

    public sortItem(value: string) {
      switch(value) {
        case 'nameDesc' : {
          this.listItem.sort((item1, item2) => {
            const i1 = item1.content.charCodeAt(0);//chartAt to Int
            const i2 = item2.content.charCodeAt(0);//chartAt to Int
            this.listItem.sort
            if(i1 > i2) {
              return -1; //true => return -1
            }
            if(i1 < i2) {
              return 1;//false => return -1
            }
            return 0;//equal
          })
          break;
        }
        case 'nameEsc' : {
          this.listItem.sort((item1, item2) => {
            const c1 = item1.content.charCodeAt(0);
            const c2 = item2.content.charCodeAt(0);
            if(c1 < c2) {
              return -1;
            }
            if(c1 > c2) {
              return 1;
            }
            return 0;
          })
          break;
        }
        case 'levelDesc' : {
          this.listItem.sort((item1, item2) => {
            const level1 = item1.level;
            const level2 = item2.level;
            if(level1 === 'High' && (level2 === 'Medium') || level2 === 'Small') {
              return -1;
            }
            if(level1 === 'Small' && (level2 === 'Medium') || level2 === 'High') {
              return 1;
            }
            return 0;
          })
          break;
        }
        case 'levelEsc' : {
          this.listItem.sort((item1, item2) => {
            const level1 = item1.level;
            const level2 = item2.level;
            if(level1 === 'Small' && (level2 === 'Medium') || level2 === 'High') {
              return -1;
            }
            if(level1 === 'High' && (level2 === 'Medium') || level2 === 'Small') {
              return 1;
            }
            return 0;
          })
          break;
        }
      }
    }
}
