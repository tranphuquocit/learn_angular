import { Component } from "@angular/core";

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})

export class ItemComponent {

    listItem = [
        {
            stt: 1,
            content: 'Tìm thấy mảnh vỡ máy bay rơi ở Iran làm 66 người chết',
            level: 'High'
        },
        {
            stt: 2,
            content: 'Không còn tranh cướp lộc hoa tre ở lễ hội đền Gióng 2018',
            level: 'Small'
        },
        {
            stt: 3,
            content: 'Hơn 37,000 người chết vì tai nạn giao thông, đốt pháo',
            level: 'Medium'
        },
        {
            stt: 4,
            content: 'Gần 200 người chết vì tai nạn giao thông 7 ngày Tết',
            level: 'Medium'
        },
        {
            stt: 5,
            content: 'VFF giải ngân 15 tỷ đồng tiền thưởng tới tay U23 VN trước Tết',
            level: 'Medium'
        },
    ]

    constructor() {}
    ngOnInit(){}

}