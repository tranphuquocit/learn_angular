import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root' //share cho tat ca dung
})

export class ShareService{
    userInfoList = new BehaviorSubject<any>(null);

    constructor() {}
    ngOnInit() {}

    public getData(): Observable<any> {
        return this.userInfoList.asObservable();
    }

    public setData(data: any) {
        this.userInfoList.next(data);
    }
}