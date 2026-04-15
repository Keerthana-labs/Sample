namespace schema.db;

entity Bus{
    key Id:String;
        Bus_Number:String;
        Bus_Type:String;
        Capacity:String;
        Driver_Name:String;
}

entity Passenger{
    key Id:String;
        Name:String;
        Age:String;
        Gender:String;
        Phone_Number:String;
}


