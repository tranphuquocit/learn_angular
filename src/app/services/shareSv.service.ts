import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ItemModel } from "../models/item.model";

@Injectable({
    providedIn: "root"
})

export class ShareService {

    private listItem = new BehaviorSubject<ItemModel[]>([
        {
            stt: 1,
            content: '9000000.53765237',
            level: 'High'
        },
        {
            stt: 2,
            content: '20000.12',
            level: 'Small'
        },
        {
            stt: 3,
            content: '5000.53452',
            level: 'Medium'
        },
        {
            stt: 4,
            content: '50000.142',
            level: 'Medium'
        },
        {
            stt: 5,
            content: '100000.7',
            level: 'Medium'
        },
    ]);

    constructor() {}
    ngOnInit() {}

    public setListItem(listItem: ItemModel[]) {
        this.listItem.next(listItem);
    }

    public getListItem(): Observable<ItemModel[]> {
        return this.listItem.asObservable();
    }

}
