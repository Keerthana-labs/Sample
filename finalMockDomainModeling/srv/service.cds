namespace service.srv;

using{schema.db as db} from '../db/schema';

service DomainAPI{
    entity teacher as projection on db.Teachers;
    entity stud as projection on db.Students;
    entity tutorial as projection on db.Tutorial;
}