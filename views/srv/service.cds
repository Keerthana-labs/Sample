namespace schema.srv;

using { sampleviews as db } from '../db/schema';
// using {sampleviews as view} from '../db/view';

service BooksApi{
    entity Books as projection on db.Books;
    entity Orders as projection on db.BookOrders;
}
