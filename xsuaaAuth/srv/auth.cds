namespace service.srv;

using {schema.db as db} from '../db/schema';

service authAPI{
    entity Bus @(restrict:[{
        grant:'READ',
        to:'Passenger'
    },
    {
        grant:['CREATE','UPDATE'],
        to:'Driver'
    },
    {
        grant:'DELETE',
        to:'Manager'
    },
]) as projection on db.Bus;

}