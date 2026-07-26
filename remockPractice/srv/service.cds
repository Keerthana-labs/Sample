namespace service.srv;

using{schema.db as db} from '../db/schema';

service mockAPI @(impl:'./mock.js'){
    entity stud as projection on db.Students;

    action updateAge (ID:String,Age:String) returns array of String;
}