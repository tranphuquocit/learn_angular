import { Component } from "@angular/core";
import { ProductService } from "src/app/share/share-services/product.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent {

  typeProduct: string[] = ['phone', 'laptop', 'tablet', 'watch'];

  listProduct!: any[];

  constructor(private proSrv: ProductService) {
    let listProduct: any[];
    this.proSrv.getListProduct().subscribe(list => {
      listProduct = list;
      if(listProduct.length > 0) {
        //do nothing
      }
      else {
        //set default list products
        this.proSrv.setListProduct(this.proSrv.listPhone);
      }
    });
  }

  public chooseTypeProduct(type: string) {
    switch(type) {
      case 'phone': {
        this.proSrv.setListProduct(this.proSrv.listPhone)
        break;
      }
      case 'laptop': {
        this.proSrv.setListProduct(this.proSrv.listLaptop)
        break;
      }
      case 'tablet': {
        this.proSrv.setListProduct(this.proSrv.listTablet)
        break;
      }
      case 'watch': {
        this.proSrv.setListProduct(this.proSrv.listWatch)
        break;
      }
    }
    localStorage.setItem('listProducts', JSON.stringify(this.listProduct));
  }
}
