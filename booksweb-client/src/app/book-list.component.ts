import {Component} from '@angular/core'

@Component({
    selector: 'app-book-list',
    template: 
        `
        <h1>Our Recommended Book List</h1> 
        <p>Here you will find a nice selection of books</p>
        <ul>
            <li>The Accursed God</li>
            <li>The Count of Monte Cristo</li>
            <li>Kane and Abel</li>
        </ul>
        `
})
export class BookListComponent{
}