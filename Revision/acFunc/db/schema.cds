namespace schema.db;

entity Customers {
    key ID : String;
    Name : String;
    Email : String;
    PhoneNumber : String;

    OrderRef : Association to many Orders on OrderRef.CustRef = $self;
}

entity Orders {
    key ID : String;
    OrderDate : String;
    TotalAmount : Decimal(10,2);
    OrderStatus : String;
    PaymentMethod : String;

    CustRef : Association to Customers;
}




