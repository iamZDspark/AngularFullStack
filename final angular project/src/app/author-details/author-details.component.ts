import { Component, OnInit } from '@angular/core';
import { Author } from 'src/model/author';
import { AuthorService } from 'src/service/author-service/author.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {

  state$: Observable<object>;
  public displayedColumns: string[] = ['book'];

  public author: Author;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.author = {
      _id: null,
      Name: '',
      Biography: null,
      Email: null,
      Photograph: null,
      Books: []
    };
  }

  ngOnInit(): void {
    if (window.history.state.authorData) {
      this.author = window.history.state.authorData;
    }
    else {
      this.router.navigateByUrl('/authorlist');
    }
  }

}
