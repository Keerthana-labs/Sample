namespace service.srv;

using {schema.db as db} from '../db/schema';

service OneAPI{
    entity bus as projection on db.Bus;
    entity pass as projection on db.Passenger;
}

