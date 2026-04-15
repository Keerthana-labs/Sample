namespace sampleviews;

entity Books{
    key BookId:String;
        Name:String;
        Author:String;
        Price:Decimal;
        Stock:Integer;
        PublishedYear:Integer;
        OrdersRef:Association to BookOrders;
}

entity BookOrders{
    key OrderId:String;
        Quantity:Integer;
        OrderDate:String;
        Customer:String;
        Status:String;
        BooksRef:Association to many Books on BooksRef.OrdersRef=$self;
}

