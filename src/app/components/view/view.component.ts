import { Component } from "@angular/core";
import { toArray } from "rxjs";

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss']
})

export class ViewComponent{

    _listColor = {}
    bgColor!: any;
    progress: number = 0;

    constructor() {}
    ngOnInit() {}

    receiveListColor(event: any) {
        this._listColor = event;
    }

    download() {
        const timeOut = setTimeout(() => {
            this.progress = this.progress + 10;
            // console.log(this.progress)
            const arrColor = Object.values(this._listColor);
            // console.log(arrColor);
            if(this.progress < 20) {
                this.bgColor = arrColor[0];
            }
            else if(this.progress < 40) {
                this.bgColor = arrColor[1];
            }
            else if(this.progress < 60) {
                this.bgColor = arrColor[2];
            }
            else if(this.progress < 80) {
                this.bgColor = arrColor[3];
            }
            else if(this.progress < 90) {
                this.bgColor = arrColor[4];
            }
            else if(this.progress < 100) {
                this.bgColor = arrColor[5];
            }
            else {
                clearTimeout(timeOut);
                return ;
            }
            this.download();
        }, 1000);
    }
}

