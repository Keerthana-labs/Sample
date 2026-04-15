namespace map.srv;

service Location {
 
function GetDistrictList(stateName: String) returns many String;

function GetPlaceList(District:String) returns many String;

function GetLocationListbyPincode(Pincode:String) returns many String;

function GetLocationListbyPlace(Place:String) returns many String;

   function GetAddressLatLog(
        doorNo   : String,
        street   : String,
        area     : String,
        district : String,
        state    : String,
        pincode  : String,
        country  : String
    ) returns String;

}

