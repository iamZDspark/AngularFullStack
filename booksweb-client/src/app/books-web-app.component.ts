import { Component } from "@angular/core";


@Component({
    selector: 'app-booksweb',  //custom html element or component identifier
    template:
    `
    <app-booksweb-header></app-booksweb-header>
    <div class='content container' >
        <app-book-list></app-book-list>
    </div>
    <app-booksweb-footer></app-booksweb-footer>
    `
})
export class BooksWebAppComponent{
    
}