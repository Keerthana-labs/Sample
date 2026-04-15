namespace map.srv;

service GeoService {
 
    function GetLocation(pincode: String) returns {
        pincode  : String;
        latitude : Decimal(9,3);
        longitude: Decimal(9,3);
        place:String;
        error : String;
    };   
}

