import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksListComponent } from './components/books-list/books-list.component';

const routes: Routes = [
  {
    path: '', component: BooksListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
