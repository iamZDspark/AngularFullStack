import { Book } from './book';

export interface Author {
    _id: string;
    Name: string;
    Biography: string;
    Photograph: string;
    Email: string;
    Books: Array<Book>;
}