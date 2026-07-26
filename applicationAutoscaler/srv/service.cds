namespace service.srv;

using {schema.db as db} from '../db/schema';

service AutoscalerAPI{
    entity teach as projection on db.teachers;
    entity stud as projection on db.Students;
}