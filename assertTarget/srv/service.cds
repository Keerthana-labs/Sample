namespace service.srv;

using {schema.db as db} from '../db/schema';

service HospitalService {
    entity Hospitals as projection on db.Hospital;
    entity Doctors as projection on db.Doctor;
}