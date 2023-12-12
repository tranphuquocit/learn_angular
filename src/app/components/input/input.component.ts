import { Component , Input } from "@angular/core";
import { UserInfo } from "../UserInfo";
import { ShareService } from "../shareService.service";

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})

export class InputComponent {
    public indexSaveUser: number = 0;

    // private userInfoList: Array<UserInfo> = [];
    public userInfo: UserInfo = {
        name: '',
        age: 0,
        sex: '',
        phone: '',
        address: ''
    };

    constructor(private shareService: ShareService) {}
    ngOnInit() {}

    public saveUserInfo(index: number) {
        if(!this.userInfo.name || !this.userInfo.age) {
            alert("Bạn hãy nhập thông tin hợp lệ!")
        }
        else {
            // this.userInfoList.push(this.userInfo);
            this.shareService.setUserInfoListById(this.userInfo, index);
            this.indexSaveUser = this.indexSaveUser + 1;
            // console.log(this.shareService.getUserInfoList);
            this.userInfo = {
                name: '',
                age: 0,
                sex: '',
                phone: '',
                address: ''
            }
        }
    }
}