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
            img: 'https://cdn-icons-png.flaticon.com/512/23/23171.png',
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
            img: 'data:image/png;base64,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',
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
            img: 'data:image/png;base64,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',
            sex: 'female',
            address: 'Chandler, Arizona',
            order: '9 Orders'
        },
        {
            name: 'Jesse Smith',
            img: 'data:image/png;base64,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',
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