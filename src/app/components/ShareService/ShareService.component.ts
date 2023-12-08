import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ShareService {
    public varService: string = 'From service';

    private dataService: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    constructor() {}
    ngOnInit() {}

    public getDataService(): Observable<any> {
        return this.dataService.asObservable();
    }

    public setDataService(data: any) {
        this.dataService.next(data);
    }
    // dataService: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    // constructor() {}
    // ngOnInit() {}

    // getData(): Observable<any> {
    //     return this.dataService.asObservable();
    // }

    // setData(data: any) {
    //     this.dataService.next(data);
    // }
}