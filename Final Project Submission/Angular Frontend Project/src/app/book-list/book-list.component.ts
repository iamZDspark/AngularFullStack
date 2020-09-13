import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/model/book';
import { BookService } from 'src/service/book-service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public books: Array<Book>;
  public displayedColumns: string[] = ['title', 'detail'];

  constructor(private router: Router,
    private bookService: BookService) { 
      this.books = new Array<Book>();
    }

  ngOnInit(): void {
    this.bookService.getBooksList().subscribe(
      data => {
        this.books = data;
      }
    );
  }

  viewBookDetails(id: string) {
    var book: any;
    this.books.forEach(element => {
      if (element._id === id) {
        book = element;
        this.router.navigateByUrl('/bookdetails', { state: { bookData: book } });
      }
    });
  }

}
