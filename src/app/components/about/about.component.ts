import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent {

  constructor(private router: Router) {
  }

  public navigate(url: string) {
    this.router.navigate([url]);
  }
}
