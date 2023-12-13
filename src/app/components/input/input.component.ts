import { Component , Input } from "@angular/core";
import { UserInfo } from "../UserInfo";
import { ShareService } from "../shareService.service";

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})

export class InputComponent {
    public indexSaveUser: number = this.shareService.getIdxSaveUser();//just added

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
            this.indexSaveUser = this.shareService.getIdxSaveUser();//reset index from service
            this.shareService.setUserInfoListById(this.userInfo, this.indexSaveUser);
            this.indexSaveUser = this.indexSaveUser + 1;
            this.shareService.setIdxSaveUser(this.indexSaveUser);
            const arr = this.shareService.getUserInfoList()
            console.log(arr);
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