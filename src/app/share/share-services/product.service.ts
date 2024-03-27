import { Injectable } from "@angular/core";
import { ProductModel } from "../share-models/product.model";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  public listPhone = [
    {
      id: '1',
      type: 'phone',
      description: 'Điện thoại iPhone 15 Pro Max 256GB',
      image: 'https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-black-2-1.jpg',
      price: 31990000,
      quantity: 99,
      like: 0,
      sold: 0,
      isLiked: false
    },
    {
      id: '2',
      type: 'phone',
      description: 'Điện thoại Samsung Galaxy S24 5G 256GB',
      image: 'https://cdn.tgdd.vn/Products/Images/42/319665/Slider/samsung-galaxy-s24-256gb-5g638419881104020719.jpg',
      price: 22990000,
      quantity: 35,
      like: 0,
      sold: 0,
      isLiked: false
    },
    {
      id: '3',
      type: 'phone',
      description: 'Điện thoại Samsung Galaxy S24+ 5G 256GB',
      image: 'https://cdn.tgdd.vn/Products/Images/42/307172/Slider/samsung-galaxy-s24-plus-5g638419875855586731.jpg',
      price: 26990000,
      quantity: 100,
      like: 0,
      sold: 0,
      isLiked: false
    },
    {
      id: '4',
      type: 'phone',
      description: 'Điện thoại realme C55 6GB',
      image: 'https://cdn.tgdd.vn/Products/Images/42/301603/Slider/vi-vn-realme-c55-slider--(2).jpg',
      price: 4190000,
      quantity: 20,
      like: 0,
      sold: 0,
      isLiked: false
    }
  ];
  public listLaptop = [
    {
      id: '1',
      type: 'laptop',
      description: 'Laptop HP 240 G9 i5 1235U/8GB/256GB/Win11 (6L1Y1PA)',
      image: 'https://cdn.tgdd.vn/Products/Images/44/291153/hp-240-g9-i5-6l1y1pa-glr-fix-2.jpg',
      price: 13690000,
      quantity: 33,
      like: 0,
      sold: 0,
      isLiked: false
    },
    {
      id: '2',
      type: 'laptop',
      description: 'Laptop Asus Vivobook X515EA i3 1115G4/8GB/512GB/Win11 (EJ3948W)',
      image: 'https://cdn.tgdd.vn/Products/Images/44/305010/Slider/vi-vn-asus-vivobook-x515ea-i3-ej3948w-slider-5.jpg',
      price: 8990000,
      quantity: 30,
      like: 0,
      sold: 0,
      isLiked: false
    },
    {
      id: '3',
      type: 'laptop',
      description: 'Laptop Acer Aspire 3 A314 35 C3KS N5100/4GB/256GB/Win11 (NX.A7SSV.009)',
      image: 'https://cdn.tgdd.vn/Products/Images/44/308490/Slider/vi-vn-acer-aspire-3-a314-35-c3ks-n5100-nxa7ssv009-slider-2.jpg',
      price: 5890000,
      quantity: 10,
      like: 0,
      sold: 0,
      isLiked: false
    },
    {
      id: '4',
      type: 'laptop',
      description: 'Laptop Apple MacBook Air 13 inch M1 2020 8-core CPU/8GB/256GB/7-core GPU (MGND3SA/A)',
      image: 'https://cdn.tgdd.vn/Products/Images/44/231244/Slider/apple-macbook-air-2020-mgn63saa638168474820399305.jpg',
      price: 18490000,
      quantity: 20,
      like: 0,
      sold: 0,
      isLiked: false
    }
  ];
  public listWatch = [
    {
      id: '1',
      type: 'watch',
      description: 'Đồng hồ G-SHOCK 45.4 mm Nam GM-2100-1ADR',
      image: 'https://cdn.tgdd.vn/Products/Images/7264/286412/g-shock-gm-2100-1adr-nam-2-1.jpg',
      price: 4352000,
      quantity: 99,
      like: 0,
      sold: 0,
      isLiked: false
    },
    {
      id: '2',
      type: 'watch',
      description: 'Đồng hồ Casio 40 mm Nam MTP-M300D-7AVDF',
      image: 'https://cdn.tgdd.vn/Products/Images/7264/305810/casio-mtp-m300d-7avdf-nam-1-1.jpg',
      price: 3455000,
      quantity: 99,
      like: 0,
      sold: 0,
      isLiked: false
    },
    {
      id: '3',
      type: 'watch',
      description: 'Đồng hồ CITIZEN 26.5 mm Nữ EQ0593-85P',
      image: 'https://cdn.tgdd.vn/Products/Images/7264/200900/citizen-eq0593-85p-vang-2-3-org.jpg',
      price: 2800000,
      quantity: 99,
      like: 0,
      sold: 0,
      isLiked: false
    },
    {
      id: '4',
      type: 'watch',
      description: 'Đồng hồ CITIZEN Mechanical 40 mm Nam NJ0150-81L',
      image: 'https://cdn.tgdd.vn/Products/Images/7264/287019/citizen-nj0150-81l-nam-1.jpg',
      price: 11350000,
      quantity: 99,
      like: 0,
      sold: 0,
      isLiked: false
    }
  ];
  public listTablet = [
    {
      id: '1',
      type: 'tablet',
      description: 'Máy tính bảng Samsung Galaxy Tab A9+ 5G',
      image: 'https://cdn.tgdd.vn/Products/Images/522/317623/sansung-galaxy-tab-a9-plus-xam-1-1.jpg',
      price: 6690000,
      quantity: 20,
      like: 0,
      sold: 0,
      isLiked: false
    },
    {
      id: '2',
      type: 'tablet',
      description: 'Máy tính bảng iPad Air 5 M1 WiFi 64GB',
      image: 'https://cdn.tgdd.vn/Products/Images/522/248096/Slider/ipad-air-5637867629020212654.jpg',
      price: 14490000,
      quantity: 20,
      like: 0,
      sold: 0,
      isLiked: false
    },
    {
      id: '3',
      type: 'tablet',
      description: 'Máy tính bảng iPad Pro M2 12.9 inch WiFi 128GB',
      image: 'https://cdn.tgdd.vn/Products/Images/522/294105/Slider/ipad-pro-m2-12-9-inch638035039267281964.jpg',
      price: 28190000,
      quantity: 20,
      like: 0,
      sold: 0,
      isLiked: false
    },
    {
      id: '4',
      type: 'tablet',
      description: 'Máy tính bảng Lenovo Tab M8 (Gen 4)',
      image: 'https://cdn.tgdd.vn/Products/Images/522/306924/Slider/lenovo-tab-m8-gen-4638197413191233670.jpg',
      price: 3990000,
      quantity: 20,
      like: 0,
      sold: 0,
      isLiked: false
    }
  ];

  public listProduct = new BehaviorSubject<ProductModel[]>([]);

  public getListProduct(): Observable<ProductModel[]> {
    return this.listProduct.asObservable();
  }

  public setListProduct(list: any) {
    this.listProduct.next(list);
  }

  public setListPhone(listPhone: any) {
    this.listPhone = listPhone;
  }

  public setListLaptop(listLaptop: any) {
    this.listLaptop = listLaptop;
  }

  public setListWatch(listWatch: any) {
    this.listWatch = listWatch;
  }

  public setListTablet(listTablet: any) {
    this.listTablet = listTablet;
  }
}
