import { Component } from "@angular/core";
import { UserModel } from "src/app/user.model";

@Component({
    selector: 'app-main-content',
    templateUrl: './main-content.component.html',
    styleUrls: ['./main-content.component.scss']
})

export class MainContentComponent {

    public listItem: UserModel[] = [
        {
            name: 'Albert Einstein',
            img: 'data:image/jpeg;base64,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',
            sex: 'male',
            address: 'Seattle, Washington',
            order: '10 Orders'
        },
        {
            name: 'Ward Bell',
            img: 'https://cdn-icons-png.flaticon.com/512/23/23171.png',
            sex: 'male',
            address: 'Dallas, Texas',
            order: '15 Orders'
        },
        {
            name: 'Robin Cleark',
            img: 'https://cdn-icons-png.flaticon.com/512/23/23171.png',
            sex: 'female',
            address: 'Los Angeles, California',
            order: '8 Orders'
        },
        {
            name: 'Misko Hevery',
            img: 'https://cdn-icons-png.flaticon.com/512/23/23171.png',
            sex: 'male',
            address: 'Anaheim, California',
            order: '3 Orders'
        },
        {
            name: 'Marcus HighTower',
            img: 'https://cdn-icons-png.flaticon.com/512/23/23171.png',
            sex: 'male',
            address: 'Phoenix, Arizona',
            order: '6 Orders'
        },
        {
            name: 'Cindy Jamison',
            img: 'https://cdn-icons-png.flaticon.com/512/23/23171.png',
            sex: 'female',
            address: 'Chandler, Arizona',
            order: '9 Orders'
        },
        {
            name: 'Jesse Smith',
            img: 'https://cdn-icons-png.flaticon.com/512/23/23171.png',
            sex: 'female',
            address: 'Encinitas, California',
            order: '12 Orders'
        },
        {
            name: 'Gene Thomas',
            img: 'https://cdn-icons-png.flaticon.com/512/23/23171.png',
            sex: 'male',
            address: 'Seattle, Washington',
            order: '15 Orders'
        },
        {
            name: 'Dan Wahlin',
            img: 'https://cdn-icons-png.flaticon.com/512/23/23171.png',
            sex: 'male',
            address: 'Chandler, Arizona',
            order: '14 Orders'
        },
        {
            name: 'Jeff Wahlin',
            img: 'https://cdn-icons-png.flaticon.com/512/23/23171.png',
            sex: 'male',
            address: 'Albuquerque, Arizona',
            order: '6 Orders'
        }
    ]

    constructor() {}
    ngOnInit() {
    }
}