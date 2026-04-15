namespace vehicles.srv;

using {vehicles.db as db} from '../db/schema';

service VehicleApi {
    entity Vehicle  as projection on db.Vehicle;
    entity Dealer   as projection on db.Dealer;
    entity Order    as projection on db.Order;
    entity LineItem as projection on db.OrderLineItem;
    entity Stock    as projection on db.Stock;
    entity State    as projection on db.State;


/* view vehicleView as select from Vehicle {
    VehicleId
}

view stateView as select from State {
    StateId
} */



entity vehicleView as select from Vehicle {
    VehicleId
};

entity stateView as select from State {
    StateId
};


function getDealersByLocation(
        doorNo   : String,
        street   : String,
        area     : String,
        district : String,
        state    : String,
        pincode  : String,
        country  : String
    ) returns array of Dealer;


    
}
