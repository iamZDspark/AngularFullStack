import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Author } from 'src/model/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }

  getAuthorsList(): Observable<Author[]>{
    return this.http.get<Author[]>('http://localhost:3000/api/authors');
  }

  setAuthor(author: Author) {
    return this.http.post('http://localhost:3000/api/authors', author);
  }

  deleteAuthor(id: string) {
    let params = new HttpParams();
    params = params.set('id', id);
    return this.http.delete('http://localhost:3000/api/authors', {params: params});
  }
}
