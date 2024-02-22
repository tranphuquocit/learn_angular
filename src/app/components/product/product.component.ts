import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { ProductModel } from "src/app/models/product.model";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent {

  // @Input() typeProduct: string = 'laptop';
  // listProduct!: ProductModel[];
  public sanPham!: any;
  @Input()
  get product(): any {
    return this.sanPham;
  }

  set product(product: any) {
    this.sanPham = product;
  }

  constructor(private service: ProductService, private router: Router) {
    // console.log(this.product)
  }

  ngOnInit() {
    // console.log(this.product)

  }

  public navigate(productChoise: any) {
    console.log(productChoise)
    let type  = productChoise.type;
    let id = productChoise.id;
    this.router.navigate([`detail/${type}/${id}`]);
  }
}
