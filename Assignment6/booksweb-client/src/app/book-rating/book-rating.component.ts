import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-rating',
  templateUrl: './book-rating.component.html',
  styleUrls: ['./book-rating.component.css'],
  styles: [`
    .fa-star, .fa-star-half-empty, .fa-star-o {
      color: orange;
    }
    .app-book-rating {
      min-width: 100px;
    }
  `]
})
export class BookRatingComponent implements OnInit {

  stars: number[] = [1, 2, 3, 4, 5];
  constructor() { }
  ngOnInit() {
  }
  countStar(star) {
    console.log('Value of star', star);
  }
}
