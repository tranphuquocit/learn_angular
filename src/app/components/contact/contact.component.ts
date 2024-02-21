import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent {

  constructor(private router: Router) {
  }

  public navigate(url: string) {
    this.router.navigate([url]);
  }
}
