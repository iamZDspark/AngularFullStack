import { NgModule } from "@angular/core";
import { BooksWebAppComponent} from "./books-web-app.component";
import { BrowserModule} from '@angular/platform-browser';
import { BooksWebFooterComponent} from "./books-web-footer.component";
import { BooksWebHeaderComponent} from "./books-web-header.component";
import {BookListComponent} from './book-list.component'; 

@NgModule({

    imports:[
        BrowserModule  //most important angular module to enable component rendering
    ],

    declarations:[ //list all the components and other elements related to current module
        BooksWebAppComponent,
        BooksWebHeaderComponent,
        BooksWebFooterComponent,
        BookListComponent
        
    ],

    exports:[
        BooksWebAppComponent,
        BooksWebHeaderComponent,
        BooksWebFooterComponent,
        BookListComponent
    ],
    
    bootstrap:[  //startup compoent for the module
        BooksWebAppComponent
    ]
})
export class AppModule{

}