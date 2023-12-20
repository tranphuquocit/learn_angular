import { Component } from "@angular/core";
import { takeUntil } from "rxjs";
import { Subject } from "rxjs/internal/Subject";
import { UserInfoModel } from "src/app/model/user-info.model";
import { ShareService } from "src/app/service/shareService.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent {

  public userInfoList: UserInfoModel[] = [];
  // Nhận list để đổ ra list danh sách không xử lý trên này nhiều về Array trả về input component sửa hết.
  constructor(private shareService: ShareService) {
    this.shareService.getUserInfo().subscribe(res => {
      if(res && res.length > 0) {
        this.userInfoList = res;
      }
    })
  }
  ngOnInit() {}

  // Gửi id về cho input component xử lý Array
  public editUser(item: UserInfoModel) {
    item.isEdit = true;
    const id: any = item.id;
    this.shareService.setIdUserInfo(id);
  }

  // Gửi id về cho input component xử lý Array
  public deleteUser(item: UserInfoModel) {
    const id: any = item.id;
    this.shareService.setIdUserInfo(id, 'delete');
  }
}