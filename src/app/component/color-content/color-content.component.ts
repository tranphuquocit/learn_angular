import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-color-content',
    templateUrl: './color-content.component.html',
    styleUrls: ['./color-content.component.scss']
})

export class ColorContentComponent {

    @Input() content!: string;
    @Input() bgColor!: string;
    @Output() clickContent = new EventEmitter<string>();

    constructor() {
        console.log('constructor');
        console.log(this.content);
    }
    ngOnChange() {
        console.log('ngOnChange');
        console.log(this.content);
    }
    ngOnInit() {
        console.log('ngOnInit');
        console.log(this.content);

    }
    ngOnDestroy() {
        console.log('ngOnDestroy');
    }

    clickFunc() {
        // alert(this.content);
        this.clickContent.emit(this.content);
    }
}