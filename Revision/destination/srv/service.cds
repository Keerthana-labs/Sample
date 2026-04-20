type Place {
  placeName : String;
  lat       : String;
  lng       : String;
}

service districtAPI {
  function getPlaceList(District: String) returns array of Place;
}