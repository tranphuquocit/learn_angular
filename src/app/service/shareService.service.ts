import { Injectable } from "@angular/core";
import { UserInfoModel } from "../model/user-info.model";
import { BehaviorSubject, Observable } from "rxjs";
import { ChartListModel } from "../model/chart-list.model";

@Injectable({
    providedIn: 'root'
})

export class ShareService {
    //just added
    private userInfoList$: UserInfoModel[] = [];
    private chartList$: ChartListModel[] = [];
    //
    private indexEdit = new BehaviorSubject<number>(0);
    private showEditForm = new BehaviorSubject<boolean>(false);
    private userInfoList = new BehaviorSubject<UserInfoModel[]>([]);
    private  chartList = new BehaviorSubject<ChartListModel[]>([
        {
            name: '1-10',
            color: 'red',
            count: 0,
            percent: ''
        },
        {
            name: '11-20',
            color: 'yellow',
            count: 0,
            percent: ''
        },
        {
            name: '21-30',
            color: 'green',
            count: 0,
            percent: ''
        },
        {
            name: '31-40',
            color: 'blue',
            count: 0,
            percent: ''
        },
        {
            name: '41-50',
            color: 'pink',
            count: 0,
            percent: ''
        },
        {
            name: '51+',
            color: 'grey',
            count: 0,
            percent: ''
        }
    ]);

    constructor() {}
    ngOnInit() {
        //just added
        this.getUserInfoList().subscribe(data => {
            this.userInfoList$ = data;
        })

        this.getChartList().subscribe(data => {
            this.chartList$ = data;
        })

        
    }
    //

    public getUserInfoList(): Observable<UserInfoModel[]> {
        return this.userInfoList.asObservable();
    }

    public setUserInfoList(userInfo: UserInfoModel[]) {
        this.userInfoList.next(userInfo);
    }

    public getChartList(): Observable<ChartListModel[]> {
        return this.chartList.asObservable();
    }

    public setChartList(chartItem: ChartListModel[]) {
        this.chartList.next(chartItem);
    }

    public setShowEditForm(show: boolean) {
        this.showEditForm.next(show);
    } 

    public getShowEditForm(): Observable<boolean> {
        return this.showEditForm.asObservable();
    }

    public setIndexEdit(index: number) {
        this.indexEdit.next(index);
    } 

    public getIndexEdit(): Observable<number> {
        return this.indexEdit.asObservable();
    }

    
}