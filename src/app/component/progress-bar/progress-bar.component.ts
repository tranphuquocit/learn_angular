import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})

export class ProgressBarComponent implements OnInit, OnChanges {

  // @Input() progress!: any;
  @Input() backgroundColor!: string;
  @Input() progressColor!: string;
  private $progress: number = 0;
  @Input()
  get progress(): number {
    return this.$progress;
  }

  set progress(value: number) {
    if(typeof value !== 'number'){
      const  progress = Number(value);
      if(Number.isNaN(progress)) {
        this.$progress = 0;
      } else {
        this.$progress = progress;
      }
    } else {
      this.$progress = value;
    }
  }
  
  

  // Trên constructor là vùng khai báo cho các biến
  constructor() {
    // Đây là function khởi tạo cho component
    console.log(this.backgroundColor, this.progress, this.progressColor, 'constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
  //   if('progress' in changes) { // Có field progress trong object changes hay là không?
  //     if(typeof changes['progress'].currentValue != 'number') { // Kiểm tra giá trị là số hay cái khác.
  //       const progress = Number(changes['progress'].currentValue);
  //       if(Number.isNaN(progress)) {
  //         this.progress = 0;
  //       } else {
  //         this.progress = progress;
  //       }
  //     }
  //   }
  }

  ngOnInit(): void {
    // Giống 1 - 1 với constructor() {} chạy sau constructor và ngOnChanges() {}
    console.log(this.backgroundColor, this.progress, this.progressColor, 'ngOnInit');
  }

  // Dưới tất cả các ng......() {} là các function() của component.
}