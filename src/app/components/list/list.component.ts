import { Component } from "@angular/core";
import { UserInfoModel } from "../model/user-info.model";
import { ShareService } from "../shareService.service";
@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})

export class ListComponent {
    
    public showEdit: boolean = false;
    public idxEdit!: number;
    public idxDelete!: number;
    public userInfoList: UserInfoModel[] = [];

    constructor (private shareService: ShareService) {
        this.userInfoList = this.shareService.getUserInfoList();
        // console.log(this.userInfoList);
    }
    ngOnInit() {}

    public editUserInfo(index: number) {
        this.showEdit = true;
        this.idxEdit = index;
    }

    public deleteUserInfo(index: number) {
        this.idxDelete = index;
        this.shareService.deleteUserInfoById(this.idxDelete);
        this.idxDelete = -1;
        console.log(this.shareService.getIdxSaveUser());
        // console.log(this.userInfoList);
    }

    public saveEdit() {
        // console.log(this.userInfoList)
        this.shareService.setUserInfoListById(this.userInfoList[this.idxEdit], this.idxEdit);
        this.showEdit = false;
        this.idxEdit = -1;
    }

    public cancelEdit() {
        this.idxEdit = -1;
        this.showEdit = false;
    }

    
 }