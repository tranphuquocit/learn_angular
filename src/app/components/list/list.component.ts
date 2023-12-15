import { Component } from "@angular/core";
import { UserInfoModel } from "src/app/model/user-info.model";
import { ShareService } from "src/app/service/shareService.service";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})

export class ListComponent {
    public indexEdit: number = 0;
    public showEditForm: boolean = false;
    public userInfoList: UserInfoModel[] = [];

    constructor(private shareService: ShareService) {}
    ngOnInit() {
        this.shareService.getUserInfoList().subscribe(data => {
            this.userInfoList = data;
        })
        this.shareService.getShowEditForm().subscribe(data => {
            this.showEditForm = data;
        })

        this.shareService.getIndexEdit().subscribe(data => {
            this.indexEdit = data;
        })

        this.shareService.getShowEditForm().subscribe(data => {
            this.showEditForm = data;
        })
        // console.log(this.userInfoList);
    }

    public editUser(index: number) {
        this.showEditForm = true;
        this.shareService.setShowEditForm(true);
        this.indexEdit = index;

    }

    public deleteUser(index: number) {
        this.userInfoList.splice(index, 1);//xoa phan tu
        this.shareService.setUserInfoList(this.userInfoList);
    }

    public saveEdit() {
        this.shareService.setShowEditForm(false);
    }

    public cancelEdit() {
        
        this.shareService.setShowEditForm(false);
    }
 }