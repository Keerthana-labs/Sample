namespace bank.srv;

using {bank.db as db} from '../db/schema';

service BankService {
    entity Banks as projection on db.Bank;

   function GetPlacebyPincode(Pincode:String) returns many String;

//    function getPlaceList(District:String) returns many String;

   function getPlaceList(District:String) returns array of String; 
}