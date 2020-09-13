import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Library';

  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Book List',
        link: './booklist',
        index: 0
      }, {
        label: 'Book Add',
        link: './bookadd',
        index: 1
      }, {
        label: 'Book Delete',
        link: './bookdelete',
        index: 2
      }, {
        label: 'Author List',
        link: './authorlist',
        index: 3
      }, {
        label: 'Author Add',
        link: './authoradd',
        index: 4
      }, {
        label: 'Author Delete',
        link: './authordelete',
        index: 5
      },
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
}
