namespace service.srv;

using{schema.db as db} from '../db/schema';

service cqlAPI @(impl:'./cql.js'){
    entity emp as projection on db.Employee
}