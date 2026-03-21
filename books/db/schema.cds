namespace Books.db;

entity Books{
   key id:String;
   title:String;
   author:String;
   price:Integer;
   stock:Integer;


// Author:Association to Author;

}
 //(Author-Book:One author can write many books)
 entity  Author{
  key id:String;
  name:String;
  email:String;
  country:String;
  
//   books: Association to many Books on books.Author = $self;
 }

 

 



 