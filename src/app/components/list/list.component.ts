import { Component } from "@angular/core";
import { UserInfo } from "../UserInfo";
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
    public userInfoList: UserInfo[] = [];

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
        // const userList: UserInfo[] = [];
        // delete this.userInfoList[index];
        // this.shareService.setUserInfoList(this.userInfoList);
        this.idxDelete = -1;
        console.log(this.userInfoList.length);
    }

    public saveEdit() {
        // this.userInfoList[this.idxEdit].name = 
        this.showEdit = false;
        // console.log(this.userInfoList)
        this.shareService.setUserInfoListById(this.userInfoList[this.idxEdit], this.idxEdit);
        this.idxEdit = -1;
    }
}