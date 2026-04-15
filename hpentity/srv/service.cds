namespace hpentity.srv;

using {hpentity.db as db} from '../db/schema';

service hospitalApi {

    entity doc as projection on  db.Doctor;
    entity hp as projection on db.Hospital;
    entity dept as projection on db.Department;
    entity pat as projection on db.Patient;
    entity app as projection on db.Appointment;
    entity pres as projection on db.Prescription;
    entity ward as projection on db.Ward;
    entity bill as projection on db.Billing;


}