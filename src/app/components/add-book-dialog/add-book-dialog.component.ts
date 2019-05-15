import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';


export interface DialogData {
  title: string;
  author: string;
  format: string;
  language: string;
}

@Component({
  selector: 'app-add-book-dialog',
  templateUrl: './add-book-dialog.component.html',
  styleUrls: ['./add-book-dialog.component.css']
})


export class AddBookDialogComponent implements OnInit {
  myControl = new FormControl();
  options: Array<string>;
  constructor(
    public dialogRef: MatDialogRef<AddBookDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.options = ['Polish', 'English'];
    }

  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit() {
  }

}
