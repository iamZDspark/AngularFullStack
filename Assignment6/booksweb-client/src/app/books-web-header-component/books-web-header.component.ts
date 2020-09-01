import {Component} from '@angular/core';

@Component({
    selector: 'app-booksweb-header',  //custom html element or component identifier
    styleUrls:[
        'books-web-header.component.css'
    ],
    templateUrl:'books-web-header.component.html'
    
})
export class BooksWebHeaderComponent{
    //this is a javascript code
    //the data can come from anywhere like
    //database, ajax, calculated etc
    //so it is a dynamic data
    public title='Word Wide Books';
    public subTitle='Where book lovers come...';
    public time='';

    constructor(){
        setInterval(()=>{
            this.time=new Date().toLocaleTimeString()
        },1000); //keep updating every 1 sec
    }
}