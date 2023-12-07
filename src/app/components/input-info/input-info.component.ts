import { Component } from "@angular/core";
import { ShareService } from "../ShareService/ShareService.component";

@Component({
    selector: 'app-input-info',
    templateUrl: './input-info.component.html',
})

export class InputInfoComponent {

    public inputValue!: string;

    constructor(private shareService: ShareService) {}
    ngOnInit() {

    }

    public setInfo() {
        this.shareService.setDataService(this.inputValue);
    }
}