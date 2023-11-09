import { Component , EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector: 'app-btn-calculator',
    templateUrl: './btn-calculator.component.html',
    styleUrls: ['./btn-calculator.component.scss']
})

export class BtnCalculatorComponent {
    @Input() operator!: string;
    @Output() phepTinhGui = new EventEmitter<string>();

    tinh() {
        this.phepTinhGui.emit(this.operator);
    }
}