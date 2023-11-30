import { Component , EventEmitter, Output} from "@angular/core";

@Component({
    selector: 'app-input-information',
    templateUrl: './input-information.html',
    styleUrls: ['./input-information.scss']
})

export class InputInformationComponent {
    user = {
        name: null,
        age: null,
        sex: null
    }
    info: Array<any> = [];
    @Output() userInfo = new EventEmitter<any>();

    constructor() {}
    ngOnInit() {}

    saveFunc() {
            this.info.push(
                this.user
            )
            // console.log(this.info)
            this.userInfo.emit(this.info);
            this.resetFormUser();
    }

    resetFormUser() {
        this.user = {
            name: null,
            age: null,
            sex: null
        }
    }
}