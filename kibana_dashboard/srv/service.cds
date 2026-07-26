namespace service.js;

using {schema.db as db} from '../db/schema';

service KibanaAPI @(impl:'./kibana.js'){
    entity dept as projection on db.Department;
    entity emp as projection on db.Employee;
}