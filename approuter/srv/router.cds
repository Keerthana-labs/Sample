namespace service.srv;

using {schema.db as db} from '../db/schema';

service routerAPI{
    entity hos @(restrict:[{
        grant:'READ',
        to:'Patient'
    },
    {
        grant:['CREATE','UPDATE'],
        to:'HospitalDean'
    },
    {
        grant:'DELETE',
        to:'Admin'
    }
]) as projection on db.Hospital;

entity course as projection on db.Doctor;
}