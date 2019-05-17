import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatTableModule, MatToolbarModule, MatIconModule, MatDialogModule,
  MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import { HeaderComponent } from './components/header/header.component';
import { AddBookDialogComponent } from './components/add-book-dialog/add-book-dialog.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
// import './polyfills';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    HeaderComponent,
    AddBookDialogComponent,
    SnackBarComponent
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
    MatSortModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatSnackBarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AddBookDialogComponent],
  entryComponents:[AddBookDialogComponent, SnackBarComponent]

})
export class AppModule { }
