import { Component , Input } from "@angular/core";
import { UserInfoModel } from './../../model/user-info.model';
import { ShareService } from "src/app/service/shareService.service";

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})

export class InputComponent {
    public showEditForm: boolean = false;
    public userInfoList: UserInfoModel[] = [];
    public userInfo: UserInfoModel = {
        name: '',
        age: 0,
        sex: '',
        phone: '',
        address: ''
    };

    constructor(private shareService: ShareService) {}
    ngOnInit() {
        this.shareService.getShowEditForm().subscribe(data => this.showEditForm = data);
    }

    public saveUserInfo() {
        if(!this.userInfo.name || !this.userInfo.age) {
            alert("Bạn hãy nhập thông tin hợp lệ!")
        }
        else {
            this.userInfoList.push(this.userInfo);
            this.shareService.setUserInfoList(this.userInfoList);
            this.resetUserInfo();
        }
    }

    private resetUserInfo() {
        this.userInfo = {
            name: '',
            age: 0,
            sex: '',
            phone: '',
            address: ''
        }
    }
}