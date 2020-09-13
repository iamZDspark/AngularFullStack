import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorAddComponent } from './author-add/author-add.component';
import { AuthorDeleteComponent } from './author-delete/author-delete.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/booklist', pathMatch: 'full' 
  },
  {
    path: 'booklist', component: BookListComponent
  },
  {
    path: 'bookdetails', component: BookDetailsComponent
  },
  {
    path: 'bookadd', component: BookAddComponent
  },
  {
    path: 'bookdelete', component: BookDeleteComponent
  },
  {
    path: 'authorlist', component: AuthorListComponent
  },
  {
    path: 'authordetails', component: AuthorDetailsComponent
  },
  {
    path: 'authoradd', component: AuthorAddComponent
  },
  {
    path: 'authordelete', component: AuthorDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
