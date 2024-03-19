import { Component, Inject } from "@angular/core";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule],
})

export class DialogComponent {

  constructor(private dialogRef: MatDialogRef<DialogComponent>) {

  }


  onNoClick(): void {
    this.dialogRef.close();
  }
}
