namespace service.srv;

using {schema.db as db} from '../db/schema';

@path:'/keeri'
service annotationsAPI @(impl:'./anno.js'){
    // entity stud as projection on db.Students;
    entity teach as projection on db.Teachers;
    entity junc as projection on db.junction;
}