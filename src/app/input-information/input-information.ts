import { Component, EventEmitter, Input , Output} from "@angular/core";

@Component({
    selector: 'app-input-information',
    templateUrl: './input-information.html',
    styleUrls: ['./input-information.scss']
})

export class InputInformationComponent{

    @Output() _userInfoList = new EventEmitter<any>();
    userInfo = {
        name: null,
        age: null,
        sex: null
    }
    userInfoList: Array<Object> = [];

    constructor() {}
    ngOnInit() {}

    saveUserInfo() {
        this.userInfoList.push(this.userInfo);
        this._userInfoList.emit(this.userInfoList);
        this.userInfo = {
            name: null,
            age: null,
            sex: null
        }
        // console.log(this.userInfoList)
    }
}