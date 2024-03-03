import { Component , Input} from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent {

  @Input() product!: any;

  constructor(private router: Router) {}

  public navigate(productType: string, productId: string) {
    this.router.navigate([`detail/${productType}/${productId}`]);
  }

}
