import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {

  public book;

  constructor() { 

    this.book= {
      "title": "The Accursed God",
      "author": "Vivek Dutta Mishra",
      "description": "The epic tale of Mahabharata searching if it was just a family fued as you were made to believe or it was the first world war? Follow through the first book of The Lost Epic Series",
      "bookId": "00108",
      "price": 199,
      "rating": 4.8,
      "cover": "/assets/images/books/the-accursed-god.jpg",
      "tags": "Indian Epic, Mahabharata, Book Series"
    };

  }

  ngOnInit(): void {
  }

}
