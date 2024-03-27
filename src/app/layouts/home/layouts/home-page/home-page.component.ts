import { Component } from "@angular/core";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent {
  imgUrl: string[] = [
    'https://i.pinimg.com/564x/e7/75/6b/e7756b653e5ce91af1d391a211f7695c.jpg',
    'https://i.pinimg.com/564x/23/b3/09/23b309cc90607f6ac70ff5af6ddcf7a7.jpg',
    'https://i.pinimg.com/564x/f1/0e/82/f10e820b22a9baa8807e4ed75ae6035a.jpg',
    'https://i.pinimg.com/564x/27/77/b7/2777b7a5537371093bac201f3a1c8fed.jpg'
];
}
