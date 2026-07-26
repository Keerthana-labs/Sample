namespace service.srv;

using {schema.db as db} from '../db/schema';

service contextAPI{
    entity hospital @(restrict:[
        {
        grant:['*'],
        to:['Admin']
        }])as projection on db.Hospital;
}
