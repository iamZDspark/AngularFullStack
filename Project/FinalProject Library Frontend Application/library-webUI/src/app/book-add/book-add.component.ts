import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from 'src/model/author';
import { Book } from 'src/model/book';
import { AuthorService } from 'src/service/author-service/author.service';
import { BookService } from 'src/service/book-service/book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  public book: Book;
  public authors: Array<Author>;
  public selectedAuthor: string;
  constructor(
    private bookService: BookService,
    private authorService: AuthorService,
    private router: Router
  ) {
    this.book = {
      _id: null,
      Title: null,
      Poster: null,
      Author: null,
      Price: null,
      Rating: null
    };
  }

  ngOnInit(): void {
    this.authorService.getAuthorsList().subscribe(
      data => {
        this.authors = data;
      }
    )
  }

  addBook() {
    this.book.Author = this.selectedAuthor;
    this.bookService.setBook(this.book).subscribe(
      res => {
        this.router.navigateByUrl('/booklist');
      }
    );
  }

}
