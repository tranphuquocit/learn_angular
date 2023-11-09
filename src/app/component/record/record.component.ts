import { Component } from "@angular/core";

@Component({
    selector: 'app-record',
    templateUrl: './record.component.html',
    styleUrls: ['./record.component.scss']
})

export class RecordComponent {
    count = 1;
    show = false;
    usersDefault = [
        {
            stt: this.count++,
            name: 'Nguyen Van A',
            age: '18',
            address: 'Bac Ninh'
        },
        {
            stt: this.count++,
            name: 'Nguyen Van B',
            age: '12',
            address: 'Ha Noi'
        },
        {
            stt: this.count++,
            name: 'Nguyen Van C',
            age: '20',
            address: 'TP HCM'
        },
        {
            stt: this.count++,
            name: 'Nguyen Van D',
            age: '17',
            address: 'Ca Mau'
        }
    ]
    userAdded: any = {};

    constructor() {
        this.inItUser();
    }
    inItUser() {
        this.userAdded = {
            stt: this.count++,
            name: '',
            age: '',
            address: ''
        }
    }

    addUser() {
        this.usersDefault.push(this.userAdded);
        // this.inItUser();
        this.userAdded = {
            stt: this.count++,
            name: '',
            age: '',
            address: ''
        }
    }

    showListUser() {
        this.show = !this.show;
    }
}
