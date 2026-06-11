namespace schema.db;

entity order{
    Key ID:String;
        Name:String;
        Date:String;
        Status:String;
        custRef:Association to many shopping on custRef.orderID=$self;
}

entity customer{
    Key ID:String;
        Name:String;
        Contact:Integer;
        Address:String;
        orderRef:Association to many shopping on orderRef.customerID=$self;

}

entity shopping{
    Key orderID:Association to order;
    Key customerID:Association to customer;
}