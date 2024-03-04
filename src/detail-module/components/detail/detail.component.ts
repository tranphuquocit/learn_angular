import { LocalizedString } from "@angular/compiler";
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductModel } from "src/detail-module/models/product.model";
import { AccountModel } from "src/login-module/models/account.model";
import { AccountService } from "src/share-services/account.service";
import { ProductService } from "src/share-services/product.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent {

  listProduct!: any[];

  currentProduct!: ProductModel;

  accLogin!: AccountModel;

  isLiked: boolean = false;

  arrLikeProduct: any[] = [];

  currentUrl!: string;

  constructor(
    private proSrv: ProductService,
    private route: ActivatedRoute,
    private accSrv: AccountService,
    private router: Router
    ) {
      this.accLogin = this.accSrv.accLogin;

      this.setCurrentProduct();

      this.setArrLikeProduct();

      this.checkIsLiked(this.currentProduct, this.accLogin);
    }

    ngOnInit() {}

  private getParamUrl() {
    let id = this.route.snapshot.params['id'];
    let type = this.route.snapshot.params['name'];
    return {
      id: id,
      name: type
    }
  }

  private setCurrentProduct() {
    let id = this.getParamUrl()['id'];
    let type = this.getParamUrl()['name'];
    switch(type) {
      case 'phone': {
        this.listProduct = this.proSrv.listPhone;
        if(this.listProduct && this.listProduct.length > 0) {
          this.listProduct.forEach((ele: any) => {
            if(ele['id'] === id) {
              this.currentProduct = ele;
            }
          })
        }
        break;
      }
      case 'laptop': {
        this.listProduct = this.proSrv.listLaptop;
        if(this.listProduct && this.listProduct.length > 0) {
          this.listProduct.forEach((ele: any) => {
            if(ele['id'] === id) {
              this.currentProduct = ele;
            }
          })
        }
        break;
      }
      case 'tablet': {
        this.listProduct = this.proSrv.listTablet;
        if(this.listProduct && this.listProduct.length > 0) {
          this.listProduct.forEach((ele: any) => {
            if(ele['id'] === id) {
              this.currentProduct = ele;
            }
          })
        }
        break;
      }
      case 'watch': {
        this.listProduct = this.proSrv.listWatch;
        if(this.listProduct && this.listProduct.length > 0) {
          this.listProduct.forEach((ele: any) => {
            if(ele['id'] === id) {
              this.currentProduct = ele;
            }
          })
        }
        break;
      }
    }
  }

  public likeProduct() {
    if(!this.accLogin) {
      this.accSrv.setCurUrl(`detail/${this.getParamUrl().name}/${this.getParamUrl().id}`);
      this.router.navigate(['login']);
    }
    else {
      //active like
      if(!this.currentProduct.isLiked) {
        this.currentProduct.isLiked = true;
        let obj = {
          userId: this.accLogin.userId,
          type: this.currentProduct.type,
          productId: this.currentProduct.id
        }
        this.arrLikeProduct.push(obj);
        localStorage.setItem('productsLiked', JSON.stringify(this.arrLikeProduct));
        this.setArrLikeProduct();

        //update like on service
        this.updateLike('plus');
      }
      //remove like
      else {
        this.currentProduct.isLiked = false;
        let newArray: any = [];
        this.arrLikeProduct.forEach((ele: any) => {
          if((ele['userId'] === this.accLogin.userId) && (ele['productId'] === this.currentProduct.id) && (ele['type'] === this.currentProduct.type)) {
            newArray.push(ele);
          }
        });
        const newList = this.arrLikeProduct.filter(item => !newArray.includes(item));
        localStorage.setItem('productsLiked', JSON.stringify(newList));
        this.setArrLikeProduct();

        //update like on service
        this.updateLike('minus');
      }
    }
  }

  private setArrLikeProduct() {
    if(localStorage.getItem('productsLiked')) {
      this.arrLikeProduct = JSON.parse(`${localStorage.getItem('productsLiked')}`);
    }
  }

  private updateLike(plusOrMinus: string) {
    let type = this.getParamUrl().name;
    switch(plusOrMinus) {
      case 'plus': {
        if(this.listProduct && this.listProduct.length > 0) {
          this.listProduct.forEach((ele: any) => {
            if(ele['id'] === this.currentProduct.id) {
              ele['like'] += 1;
            }
          })
        }
        switch(type) {
          case 'phone': {
            this.proSrv.setListPhone(this.listProduct);
            break;
          }
          case 'laptop': {
            this.proSrv.setListLaptop(this.listProduct);
            break;
          }
          case 'tablet': {
            this.proSrv.setListTablet(this.listProduct);
            break;
          }
          case 'watch': {
            this.proSrv.setListWatch(this.listProduct);
            break;
          }
        }
        break;
      }
      case 'minus': {
        if(this.listProduct && this.listProduct.length > 0) {
          this.listProduct.forEach((ele: any) => {
            if(ele['id'] === this.currentProduct.id) {
              if(ele['like'] > 0) {
                ele['like'] -= 1;
              }
            }
          })
        }
        switch(type) {
          case 'phone': {
            this.proSrv.setListPhone(this.listProduct);
            break;
          }
          case 'laptop': {
            this.proSrv.setListLaptop(this.listProduct);
            break;
          }
          case 'tablet': {
            this.proSrv.setListTablet(this.listProduct);
            break;
          }
          case 'watch': {
            this.proSrv.setListWatch(this.listProduct);
            break;
          }
        }
        break;
      }
    }


  }

  private checkIsLiked(currentProduct: ProductModel, accLogin: AccountModel) {
    //reset isLiked
    if(this.listProduct && this.listProduct.length > 0) {
      this.listProduct.forEach((item: any) => {
        item.isLiked = false;
      })
    }

    //scan isLiked
    if(!this.accLogin) {
    }
    else if(this.arrLikeProduct && this.arrLikeProduct.length > 0) {
      this.arrLikeProduct.forEach((ele: any) => {
        if((ele['type'] === currentProduct.type) && (ele['productId'] === currentProduct.id) && (ele['userId'] === accLogin.userId)) {
          this.currentProduct.isLiked = true;
        }
        else {
        }
      })
    }
  }
}
