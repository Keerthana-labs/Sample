namespace service.srv;

using {schema.db as db} from '../db/schema';

service autoscalerAPI{
    entity patient as projection on db.Patient;
}