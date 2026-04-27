namespace service.srv;

using {schema.db as db} from '../db/schema';

service acFuncAPI @(impl:'./service.js'){
    entity cust as projection on db.Customers;
    entity order as projection on db.Orders;

    action giveValidateEmail(ID:String) returns String;
    function giveTotalAmount(ID:String) returns String;

} 


