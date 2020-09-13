import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/model/book';
import { BookService } from 'src/service/book-service/book.service';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {

  public books: Array<Book>;
  public displayedColumns: string[] = ['title', 'delete'];
  constructor(
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.bookService.getBooksList().subscribe(
      data => {
        this.books = data;
      }
    );
  }

  deleteBook(id: string) {
    this.bookService.deleteBook(id).subscribe(
      res => {
        this.bookService.getBooksList().subscribe(
          data => {
            this.books = data;
          }
        );
      }
    )
  }

}
