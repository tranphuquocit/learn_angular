import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent {

  images: string[] = [
    'https://i.pinimg.com/564x/e4/50/86/e450866ac33a6eb6bffe71bb77c39075.jpg',
    'https://i.pinimg.com/564x/38/0f/71/380f71c4e505523f641e4c6b635ee398.jpg'
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
