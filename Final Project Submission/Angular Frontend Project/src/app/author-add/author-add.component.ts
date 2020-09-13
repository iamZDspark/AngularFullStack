import { Component, OnInit } from '@angular/core';
import { Author } from 'src/model/author';
import { AuthorService } from 'src/service/author-service/author.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-author-add',
  templateUrl: './author-add.component.html',
  styleUrls: ['./author-add.component.css']
})
export class AuthorAddComponent implements OnInit {

  public author: Author;
  public email = new FormControl('', [Validators.required, Validators.email]);
  constructor(
    private authorService: AuthorService,
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
  }

  addAuthor() {
    if (this.email.status.toLowerCase() === 'valid') {
      this.author.Email = this.email.value;
    }
    if (this.author.Name && this.author.Biography && this.author.Email && this.author.Photograph) {
      this.authorService.setAuthor(this.author).subscribe(
        res => {
          this.router.navigateByUrl('/authorlist');
        }
      );
    }
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
