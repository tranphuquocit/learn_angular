import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductModel } from "src/app/models/product.model";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail.product.component.html',
  styleUrls: ['./detail.product.component.scss']
})

export class DetailProductComponent {

  private listProduct!: ProductModel[];
  public product!: ProductModel;

  constructor(
    private route: ActivatedRoute,
    private service: ProductService
    ){}

  ngOnInit() {
    const allParams = this.route.snapshot.params // allParams is an object
    const name = allParams['name'];
    const id = allParams['id'];
    switch(name) {
      case 'phone': {
        this.listProduct = this.service.listPhone;
        break;
      }
      case 'laptop': {
        this.listProduct = this.service.listLaptop;
        break;
      }
      case 'watch': {
        this.listProduct = this.service.listWatch;
        break;
      }
      case 'tablet': {
        this.listProduct = this.service.listTablet;
        break;
      }
    }
    this.listProduct.forEach(item => {
      if(item.id == id) {
        this.product = item;
      }
    })
    // console.log(this.product);
}

public likeProduct() {
  // this.listProduct.forEach(item => {
  //   if(item.id === this.product.id) {
  //     item.like = item.like? + 1;
  //   }
  // })
}
}
