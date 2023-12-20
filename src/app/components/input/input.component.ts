import { Component, Input } from "@angular/core";
import { UserInfoModel } from './../../model/user-info.model';
import { ShareService } from "src/app/service/shareService.service";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent {
  public userInfoList: UserInfoModel[] = [];
  public userInfoListTemp: UserInfoModel[] = [];
  public userInfo: UserInfoModel = {
    id: 0,
    name: '',
    age: 0,
    sex: '',
    phone: '',
    address: ''
  };
  // Dùng cho ẩn hiện btn Cancel khi bật chế độ sửa.
  public isEdit: boolean = false;

  constructor(private shareService: ShareService) { }
  ngOnInit() {
    this.shareService.getIdUserInfo().subscribe(res => {
      // Check id để sửa. 
      if(res && res.id && res.statusAction !== 'delete') {
        this.isEdit = true;
        let user: any = this.userInfoList.find(ele => ele.id === res.id) || undefined;
        this.userInfo = user;
      }
      // Check id để xoá, nên xử lý array trên 1 component
      else if(res && res.id && res.statusAction === 'delete') {
        const listRemove = this.userInfoList.filter(ele => ele.id !== res.id);
        this.userInfoList = listRemove;
        this.shareService.setUserInfo(this.userInfoList);
        // clone ra array cố định để lưu lại.
        this.userInfoListTemp = JSON.parse(JSON.stringify(this.userInfoList)) as typeof this.userInfoList;
      } 
    })
  }

  public saveUserInfo() {
    if (!this.userInfo.name || !this.userInfo.age) {
      alert("Bạn hãy nhập thông tin hợp lệ!")
    }
    else {
      if (!this.userInfo.id) {
        this.userInfo.id = new Date().getTime();
        this.userInfo.isEdit = false;
        this.userInfoList.push(this.userInfo);
      } else {
        this.userInfo.isEdit = true;
        let user = this.userInfoList.find(ele => ele.id === this.userInfo.id);
        user = this.userInfo;
      }
      this.shareService.setUserInfo(this.userInfoList);
      // clone ra array cố định để lưu lại.
      this.userInfoListTemp = JSON.parse(JSON.stringify(this.userInfoList)) as typeof this.userInfoList;
      this.resetUserInfo();
    }
  }

  public cancelUserInfo() {
    // clone ra array cố định để lưu lại.
    this.userInfoList = JSON.parse(JSON.stringify(this.userInfoListTemp)) as typeof this.userInfoListTemp;
    // Gửi array cố định khi cancel không sửa. Trở lại danh sách ban đầu.
    this.shareService.setUserInfo(this.userInfoListTemp);
    this.resetUserInfo();
  }

  private resetUserInfo() {
    this.isEdit = false;
    this.userInfo = {
      name: '',
      age: 0,
      sex: '',
      phone: '',
      address: ''
    }
  }
}