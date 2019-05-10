import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


export interface DialogData {
  title: string;
  author: string;
}

@Component({
  selector: 'app-add-book-dialog',
  templateUrl: './add-book-dialog.component.html',
  styleUrls: ['./add-book-dialog.component.css']
})


export class AddBookDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddBookDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    }

  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit() {
  }

}
