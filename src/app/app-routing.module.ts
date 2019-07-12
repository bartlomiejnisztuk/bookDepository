import { LoginPageComponent } from './components/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksListComponent } from './components/books-list/books-list.component';

const routes: Routes = [
  {
    path: '', component: LoginPageComponent
  },
  {
    path: 'books', component: BooksListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
