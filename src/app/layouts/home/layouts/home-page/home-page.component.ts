import { Component } from "@angular/core";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent {
  imgUrl: string[] = [
    '../../../../../assets/shop-template/images/banner-1.png',
    '../../../../../assets/shop-template/images/banner-2.png',
    '../../../../../assets/shop-template/images/banner-3.png',
    '../../../../../assets/shop-template/images/banner-4.png',
    '../../../../../assets/shop-template/images/banner-5.png',
    '../../../../../assets/shop-template/images/banner-6.png'
];
}
