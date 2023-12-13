import { Injectable } from "@angular/core";
import { UserInfoModel } from "./model/user-info.model";

@Injectable({
    providedIn: 'root'
})

export class ShareService {
    public idxSaveUser: number = 0; //just added
    public userInfoList: Array<UserInfoModel> = [];
    protected chartList = [
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
    ]

    constructor() {}
    ngOnInit() {}

    public getUserInfoList(): Array<UserInfoModel> {
        return this.userInfoList;
    }

    public getChartList() {
        return this.chartList;
    }

    public setUserInfoListById(userInfo: UserInfoModel, index: number) {
        this.userInfoList[index] = userInfo;
    }

    public setUserInfoList(userInfoList: UserInfoModel[]) {
        this.userInfoList = userInfoList;
    }

    // public setUserInfoById(userInfo: UserInfo, id: number) {
    //     this.userInfoList[id] = userInfo;
    // }

    public deleteUserInfoById(id: number) {
        this.userInfoList.splice(id, 1);
        this.idxSaveUser = this.idxSaveUser - 1;
    }

    //just added
    public getIdxSaveUser(): number {
        return this.idxSaveUser;
    }

    public setIdxSaveUser(index: number) {
        this.idxSaveUser = index;
    }

}