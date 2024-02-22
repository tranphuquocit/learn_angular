import { Component, ElementRef } from "@angular/core";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent {

  images: string[] = ['https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Shop-Products-Social-Media-Banner-Design-Template-scaled.jpg', 'https://cdn.vectorstock.com/i/preview-1x/64/35/merry-christmas-banner-with-product-table-display-vector-44736435.webp', 'https://cdn.vectorstock.com/i/preview-1x/14/27/dairy-product-horizontal-web-banner-vector-45811427.webp'];
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
