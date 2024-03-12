import { Injectable } from "@angular/core";
import { AccountModel } from "src/share-models/account.model";
import { CartItem } from "src/share-models/cart-item.model";

@Injectable({
  providedIn: 'root'
})

export class CartService {

  accLogin!: AccountModel;

  public listProduct: CartItem[] = [];

  public listTempProduct: CartItem[] = [];

  constructor() {}

  public setListProduct(list: any) {
    this.listProduct = list;
  }

  public setAccLogin(acc: any) {
    this.accLogin = acc;
  }

  public setListTempProduct(list: any) {
    this.listTempProduct = list;
  }

}
