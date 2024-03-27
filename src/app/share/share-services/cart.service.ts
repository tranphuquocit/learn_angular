import { Injectable } from "@angular/core";
import { AccountModel } from "src/app/share/share-models/account.model";
import { CartItem } from "src/app/share/share-models/cart-item.model";

@Injectable({
  providedIn: 'root'
})

export class CartService {

  accLogin!: AccountModel;

  public listProduct: CartItem[] = [];

  constructor() {}

  public setListProduct(list: any) {
    this.listProduct = list;
  }

  public setAccLogin(acc: any) {
    this.accLogin = acc;
  }
}
