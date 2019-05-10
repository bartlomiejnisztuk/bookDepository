import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatTable } from '@angular/material';
import { AddBookDialogComponent } from '../add-book-dialog/add-book-dialog.component';
import { MatTableDataSource } from '@angular/material';

export interface Book {
  author: string;
  title: string;
}

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  booksList: Book[];
  dataSource: MatTableDataSource<Book>;
  columnsToDisplay;
  @ViewChild(MatTable) table: MatTable<any>;


  constructor(private dialog: MatDialog) {
    this.columnsToDisplay = ['title', 'author'];
    this.booksList = [{ title: 'Lord of the rings', author: 'J.R.R. Tolkien' },
    { title: 'Green Mile', author: 'S. King' }];
    this.dataSource = new MatTableDataSource(this.booksList);
  }

  ngOnInit() {
  }


  openAddBookDialog(): void {
    const dialogRef = this.dialog.open(AddBookDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.dataSource.data.push(result);
        this.table.renderRows();
      }
    });
  }

  addBookToList(book): void {
    this.booksList.push(book);
  }


}
