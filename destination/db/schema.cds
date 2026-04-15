namespace bank.db;

entity Bank {
    key BankID   : UUID;      
        Name     : String;
        Branch   : String; 
        Pincode  : String;  
        Latitude:String;
        Longitude:String;
        Place:String;
        SWIFT    : String;  
}