import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBooksList(): Observable<Book[]>{
    return this.http.get<Book[]>('http://localhost:3000/api/books');
  }

  setBook(book: Book) {
    return this.http.post('http://localhost:3000/api/books', book);
  }

  getBooksByAuthor(authorId: string): Observable<Book[]> {
    return this.http.get<Book[]>(`http://localhost:3000/api/booksbyAuthor/${authorId}`);
  }

  deleteBook(id: string) {
    let params = new HttpParams();
    params = params.set('id', id);
    return this.http.delete('http://localhost:3000/api/books', {params: params});
  }
}
