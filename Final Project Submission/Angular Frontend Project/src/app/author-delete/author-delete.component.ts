import { Component, OnInit } from '@angular/core';
import { Author } from 'src/model/author';
import { AuthorService } from 'src/service/author-service/author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-delete',
  templateUrl: './author-delete.component.html',
  styleUrls: ['./author-delete.component.css']
})
export class AuthorDeleteComponent implements OnInit {

  public authors: Array<Author>;
  public displayedColumns: string[] = ['name', 'delete'];

  constructor(private authorService: AuthorService,
    private router: Router) {
    this.authors = new Array<Author>();
  }

  ngOnInit(): void {
    this.authorService.getAuthorsList().subscribe(
      data => {
        this.authors = data;
      }
    );
  }

  deleteAuthor(id: string) {
    this.authorService.deleteAuthor(id).subscribe(
      res => {
        this.authorService.getAuthorsList().subscribe(
          data => {
            this.authors = data;
          }
        );
      }
    )
  }

}
