import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatTable, MatPaginator, MatSort, MatSnackBar } from '@angular/material';
import { AddBookDialogComponent } from '../add-book-dialog/add-book-dialog.component';
import { MatTableDataSource } from '@angular/material';
import { Book } from '../models/book';
import { ReadingStatus } from '../models/readingStatus';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import {animate, state, style, transition, trigger} from '@angular/animations';

// export interface Book {
//   author: string;
//   title: string;
// }

const COLORS: string[] = ['orange', 'green', 'purple',
  'black', 'gray'];

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class BooksListComponent implements OnInit {
  booksList: Book[];
  dataSource: MatTableDataSource<Book>;
  columnsToDisplay;
  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  expandedElement: Book | null;

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {
    this.columnsToDisplay = ['title', 'author', 'status', 'actions'];
    this.booksList = [{ title: 'Lord of the rings', author: 'J.R.R. Tolkien', description:'example description', status: this.readingStatusToString(ReadingStatus.Completed) },
    { title: 'Green Mile', author: 'S. King', status: this.readingStatusToString(ReadingStatus.Suspended) }];
    this.dataSource = new MatTableDataSource(this.booksList);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  openAddBookDialog(): void {
    const dialogRef = this.dialog.open(AddBookDialogComponent, {
      width: '250px',
      minWidth: '500px',
      data: {book:{}, mode: 'add'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.addBookToList(result);
      }
    });
  }

  addBookToList(book: Book): void {
    book.status = this.readingStatusToString(ReadingStatus.NotStarted);
    this.booksList.push(book);
    this.table.renderRows();
    this.dataSource.paginator = this.paginator;
    this.openSnackBar()
  }

  private readingStatusToString(status: ReadingStatus): string {

    switch (status) {
      case ReadingStatus.InProgress:
        return "In Progress";
      case ReadingStatus.NotStarted:
        return "New";
      case ReadingStatus.Suspended:
        return "Suspended";
      case ReadingStatus.Completed:
        return "Completed";
      default:
        break;
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  statusColor(status: ReadingStatus) {
    return COLORS[1];

  }

  startReading(book: Book): void {
    book.status = this.readingStatusToString(ReadingStatus.InProgress);
  }

  deleteBook(i: number) {

    this.dataSource.data.splice(i, 1);

    console.log(i);
    this.table.renderRows();
    this.dataSource.paginator = this.paginator;
  }

  editBook(book: Book, index: number) {
    console.log(book);
    console.log(index);
    const dialogRef = this.dialog.open(AddBookDialogComponent, {
      width: '250px',
      minWidth: '500px',
      data: {book: book, mode: 'edit'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.addBookToList(result);
      }
    });
  }

  openSnackBar() {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 2 * 1000,
    });
  }


}
