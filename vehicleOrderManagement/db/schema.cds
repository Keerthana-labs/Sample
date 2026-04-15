namespace vehicles.db;

entity State{
    key StateId:String;
        StateName:String;
        StateCode:String;
        TaxRate:Decimal;
        dealers: Composition of many Dealer on dealers.state = $self;
        
}

entity Dealer{
    key DealerId:String;
        Dealername:String;
        Location:String;
        PhoneNumber:String;
        DoorNo:String;
        District:String;
        State:String;
        Country:String;
        Street:String;
        Area:String;
        Pincode:String;
        Latitude:String;
        Longitude:String;
        state:Association to State;
        orders:Composition of many Order on orders.dealers.DealerId = DealerId;
  
}

entity  Order{
    key OrderId:String;
        Quantity:String;
        OrderDate:String;
        dealers:Association to Dealer;
        vehicles:Association to Vehicle;
        lineItem:Composition of many OrderLineItem on lineItem.order=$self;

}

entity Vehicle{
    key VehicleId:String;
        ModelName:String;
        OldPrice:Decimal(13,3);
        CurrentPrice:Decimal(14,4);
        orders:Composition of many Order on  orders.vehicles=$self;
}


entity OrderLineItem{
    key Orderlineitemid  : String;
        TotalPrice : Decimal(10,3);
        order:Association to Order;
        vehicle:Association to Vehicle;
        dealer:Association to Dealer;
}
 
entity Stock {
    key StockId : String;
        QuantityAvailable : Integer;
        Vehicle: Association to Vehicle;
}









