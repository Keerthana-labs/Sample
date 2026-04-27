namespace service.srv;

using{store.db as db} from '../db/schema';

service credentialAPI{
    entity hospital as projection on db.Hospital;
}


