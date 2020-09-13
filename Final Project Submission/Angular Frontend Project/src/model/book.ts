import { Author } from './author';

export interface Book {
    _id: string;
    Title: string;
    Poster: string;
    AuthorList?: Author;
    Price: string;
    Rating: string;
    Author?: string
}