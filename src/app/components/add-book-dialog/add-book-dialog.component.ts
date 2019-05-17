import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Book } from '../models/book';


export interface DialogData {
  book: Book;
  mode: string
}

@Component({
  selector: 'app-add-book-dialog',
  templateUrl: './add-book-dialog.component.html',
  styleUrls: ['./add-book-dialog.component.css']
})

export class AddBookDialogComponent implements OnInit {  
  languageOptions: Array<string>;
  formatOptions: Array<string>;
  categoryOptions: Array<string>;
  title: string;
  data: Book;
  constructor(
    public dialogRef: MatDialogRef<AddBookDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: DialogData) {
    this.languageOptions = ['Polish', 'English', 'Polish & English'];
    this.formatOptions = ['Paper', 'ebook', 'pdf', 'audiobook'];
    this.categoryOptions = ['Fantasy', 'Biography', 'Non-fiction', 'Fiction', 'Thriller', 'Programming/IT', 'Language learning'];
    this.title = this.getTitle(this.dialogData.mode);
    this.data = this.dialogData.book;

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getTitle(mode: string): string {
    if(mode == 'add'){
      return 'Add book';
    }
    else{
      return 'Edit book';
    }
  }


  ngOnInit() {
  }

}
