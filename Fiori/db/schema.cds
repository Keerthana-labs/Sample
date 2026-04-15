namespace vehicles.db;
//one vehicle can have multiple 
entity Vehicle{
    key Vehicleid:String;
    Modelname:String;
    Price:String;
    Status:String;
    dealers:Association to Dealer;
    orders:Composition of many Order on  orders.vehicles=$self;
}
entity Dealer{
    key Dealerid:String;
       Dealername:String;
       Location:String;
       State:String;
       Tax:String;
       vehicles:Association to many Vehicle on vehicles.dealers=$self;
}
entity  Order{
    key Orderid:String;
    Quantity:String;
    vehicles:Association to Vehicle;
}

















/* 
{
    "Vehicleid":"V11",
    "Modelname":"Scooty",
    "Price":"1150000",
    "Status":"Pending"
} */

/* 
{
       "Dealerid":"D11",
       "Dealername":"Nithish",
       "Location":"Madurai",
       "State":"TamilNadu",
       "Tax":"170"
} */