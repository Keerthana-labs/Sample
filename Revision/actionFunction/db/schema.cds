namespace company.db;

entity Customers {
    key ID        : String;
    name          : String;
    email         : String;
    phone         : Integer;
}

entity Orders {
    key ID        : String;
    orderDate     : String;
    amount        : Decimal;
    customer_ID   : String;
    Discount      : String;
}