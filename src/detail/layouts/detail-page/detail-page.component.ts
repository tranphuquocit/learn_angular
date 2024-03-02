import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html'
})

export class DetailPageComponent {

  constructor(private router: Router) {}
  public navigate(url: string) {
    this.router.navigate([url]);
  }
}
