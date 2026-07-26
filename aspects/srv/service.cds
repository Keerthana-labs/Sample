namespace service.srv;

using{schema.db as db} from '../db/schema';

service aspectsAPI @(impl:'./aspects.js'){
    entity person as projection on db.Person;
    entity passbook as projection on db.Passbook;
}