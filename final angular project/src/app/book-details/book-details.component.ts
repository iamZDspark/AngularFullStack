import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from 'src/model/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  state$: Observable<object>;
  public book: Book;

  constructor(
    private route: ActivatedRoute,
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
    if (window.history.state.bookData) {
      this.book = window.history.state.bookData;
    }
    else {
      this.router.navigateByUrl('/booklist');
    }
  }

}
