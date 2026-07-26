namespace service.srv;

using{schema.db as db} from '../db/schema';

service autoscalerAPI{
    entity hospital as projection on db.Hospital;
}


