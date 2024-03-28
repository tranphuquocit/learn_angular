import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent {

  images: string[] = [
    '../../../../../assets/shop-template/images/slide-1.png',
    '../../../../../assets/shop-template/images/slide-2.png',
    '../../../../../assets/shop-template/images/slide-3.png',
    '../../../../../assets/shop-template/images/slide-4.png',
    '../../../../../assets/shop-template/images/slide-5.png',
    '../../../../../assets/shop-template/images/slide-6.png'
  ]
  currentIndex: number = 0;

  constructor() { }

  prev() {
    this.currentIndex = (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
  }

  next() {
    this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
  }

  timeOut = setTimeout(() => {
    this.currentIndex += 1;
    if(this.currentIndex > this.images.length - 1) {
      this.currentIndex = 0;
    }
    this.timeOut;
  }, 1000);
}
