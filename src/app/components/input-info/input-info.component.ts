import { Component, Input } from "@angular/core";
import { ShareService } from "../shareService/shareService.component";

@Component({
    selector: 'app-input-info',
    templateUrl: './input-info.component.html',
})

export class InputInfoComponent {

    userInfo = {
        name: null,
        age: null,
        sex: null,
        phone: null,
        address: null
    }

    userInfoList: Array<any> = [];

    constructor(private shareService: ShareService) {}
    ngOnInit() {}

    public saveUserInfo() {
        this.userInfoList.push(this.userInfo);
        this.shareService.setData(this.userInfoList);
        this.userInfo = {
            name: null,
            age: null,
            sex: null,
            phone: null,
            address: null
        }
    }
    
}