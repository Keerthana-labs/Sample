namespace books.srv;

using {Books.db as db} from '../db/schema';

service booksApi{
    entity books as projection on db.Books;
    entity author as projection on db.Author;

action insertData(Books : array of books,Author : array of author);

}