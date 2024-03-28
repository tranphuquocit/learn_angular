import { Component, ViewChild } from "@angular/core";
import { MatMenuTrigger } from "@angular/material/menu";
import { Router } from "@angular/router";
import { AccountModel } from "src/app/share/share-models/account.model";
import { CartItem } from "src/app/share/share-models/cart-item.model";
import { ProductModel } from "src/app/share/share-models/product.model";
import { AccountService } from "src/app/share/share-services/account.service";
import { ProductService } from "src/app/share/share-services/product.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {

  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  isLogin!: boolean;

  accLogin!: AccountModel;

  listProductOnCart: CartItem[] = [];

  quantityOnCart: number = 0;

  searchKey!: string;

  arrLikeProduct: any[] = [];

  listProduct!: any[];

  //list when stop searching
  tempList!: any[];

  constructor(
    private router: Router,
    private accSrv: AccountService,
    private proSrv: ProductService
    ) {
      this.isLogin = this.accSrv.isLogin;
      this.accLogin = this.accSrv.accLogin;

      if(!this.isLogin) {
        if(localStorage.getItem('guess')) {
          this.listProductOnCart = JSON.parse(`${localStorage.getItem('guess')}`);
          this.countCart();
        }
      }
      else {
        if(localStorage.getItem(`${this.accLogin.userId}`)) {
          this.listProductOnCart = JSON.parse(`${localStorage.getItem(`${this.accLogin.userId}`)}`);
          this.countCart();
        }
      }

      //get list from service to filter
          //get arrLikeProduct
      if(localStorage.getItem('productsLiked')) {
        this.arrLikeProduct = JSON.parse(`${localStorage.getItem('productsLiked')}`);
      }

      this.proSrv.getListProduct().subscribe(list => this.listProduct = this.scanLike(list));
    }

    public navigate(url: string) {
      this.router.navigate([url]);
    }

    public logout() {
      this.accSrv.setCurUrl('');
      this.accSrv.setIsLogin(false);
      this.accSrv.setAccLogin(null);
      localStorage.setItem('guess', JSON.stringify([]));
      this.router.navigate(['login']);
    }

    private countCart() {
      this.listProductOnCart.forEach((ele: any) => {
        this.quantityOnCart += ele['quantity'];
      })
    }

    public openMenu() {
      this.trigger.openMenu();
    }

    private scanLike(list: any[]) {
      let resetList = list.map((ele: any) => {
        ele['like'] = 0;
        return ele;
      })

      let newList: any[] = [];
      this.arrLikeProduct.forEach((eleLP: any) => {
        newList = resetList.map((ele: any) => {
          if((ele['type'] === eleLP['type']) && (ele['id'] === eleLP['productId'])) {
            ele['like'] += 1;
            return ele;
          }
          else return ele;
        })
      })
      return newList;
    }

    private filterProduct(list: ProductModel[]) {
      let filterList: any[] = list.filter((ele: any) => {
        if(ele['description'].toLowerCase().includes(this.searchKey)) {
          return ele;
        }
      });
      // console.log(filterList)
      return filterList;
    }

    public search() {
      //filter list
      if(!this.searchKey || this.searchKey === '') {
        //reset list
        // this.proSrv.getListProduct().subscribe(list => this.listProduct = list);
      }
      else {
        // this.filterProduct(this.listProduct);
        this.proSrv.setListProduct(this.filterProduct(this.listProduct));
      }
    }
}
