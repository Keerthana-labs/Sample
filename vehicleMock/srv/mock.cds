namespace vehicles.srv;

using {vehicles.db as db} from '../db/vhmk';

service VehicleApi {
    entity Vehicle  as projection on db.Vehicle;
    entity Dealer   as projection on db.Dealer;
    entity Order    as projection on db.Order;
    entity LineItem as projection on db.OrderLineItem;
    entity Stock    as projection on db.Stock;
    entity State    as projection on db.State;


    view vehicleView as select from Vehicle {
            VehicleId
        }

    view stateView as select from State {
            StateId
        }

    
}
