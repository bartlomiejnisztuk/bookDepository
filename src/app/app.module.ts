import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatTableModule, MatToolbarModule, MatIconModule, MatDialogModule,
  MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import { HeaderComponent } from './components/header/header.component';
import { AddBookDialogComponent } from './components/add-book-dialog/add-book-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    HeaderComponent,
    AddBookDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AddBookDialogComponent],
  entryComponents:[AddBookDialogComponent]

})
export class AppModule { }
