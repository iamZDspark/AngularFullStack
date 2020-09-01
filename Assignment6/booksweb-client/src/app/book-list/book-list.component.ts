import { Component, OnInit } from '@angular/core';
import {Book} from '../service/book'; 


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public showImages=true;
  public books: Book[];
  
  constructor() { 

    this.books=[
      {
        "title": "The Accursed God",
        "author": "Vivek Dutta Mishra",
        "description": "The epic tale of Mahabharata searching if it was just a family fued as you were made to believe or it was the first world war? Follow through the first book of The Lost Epic Series",
        "bookId": "00108",
        "price": 199,
        "rating": 4.8,
        "cover": "/assets/images/books/the-accursed-god-w.jpg",
        "tags": "Indian Epic, Mahabharata, Book Series"
      },
      {
        "title": "The Count of Monte Cristo",
        "author": "Alexandre Dumas",
        "description": "The story of a person wrongly implicated for a false crime and is send to prison. He returns  to seek the vengeane, love and justice.",
        "bookId": "7126",
        "price": 450,
        "rating": 4.8,
        "cover": "/assets/images/books/7126.jpg",
        "tags": "Crime,Adventure,Classic,Best-Seller,Revenge,Justice"
      },
      {
        "title": "Kane And Abel",
        "author": "Jeffrey Archer",
        "description": "story of two men born on the same date on opposite side of the globe and economy and years later fate brings them for a head on collission. The best selling book by the author.",
        "bookId": "78983",
        "price": 220,
        "rating": 3.5,
        "cover": "/assets/images/books/78983.jpg",
        "tags": "best-seller,chronology"
      },
      {
        "title": "Rashmirathi",
        "author": "Ramdhari Singh Dinkar",
        "description": "A poetic tale of Karna of Mahabharat. The seven chapter gives a glimpse of the life and harship of one of the greatest warrior of his time",
        "bookId": "10588193",
        "price": 450,
        "rating": 4.5,
        "cover": "/assets/images/books/10588193.jpg",
        "tags": "classic, poetry, mahabharata, karna, hindi"
      },
    ];


  }

  toggleImages(){
    this.showImages=!this.showImages;
  }

  ngOnInit(): void {
  }


  public imageWidth=120;
  public maxWidth=200; //should never go above
  public minWidth=50;  //should never go below this
  public delta=10;  //each click should increase/decrease by this value

  increaseSize(){
    this.change(this.imageWidth+this.delta);
  }
  decreaseSize(){
    this.change(this.imageWidth-this.delta);
  }

  change(newSize){
    if(newSize<this.minWidth)
      newSize=this.minWidth;
    else if(newSize>this.maxWidth)
      newSize=this.maxWidth;
    this.imageWidth=newSize;

  }

}
