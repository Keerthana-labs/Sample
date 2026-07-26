namespace service.srv;

using {schema.db as db} from '../db/schema';

service HospitalAPI @(impl:'./emit.js'){
    entity hos as projection on db.Hospital;

    action updateLocation (ID:String,Location:String,Rating:String);
    action updateRating (ID:String,Rating:String)
}