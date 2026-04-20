namespace acfunc.srv;

using {company.db as db} from '../db/schema';

service acfuncAPI @(impl:'./service.js'){
    entity customer as projection on db.Customers actions{
        action giveValidateEmail(ID:String) returns String;
        function giveTotalAmount(OrderID:String) returns String;
        
    }
    entity order as projection on db.Orders;

//-------------UNBOUND-----------------

    // action giveValidateEmail(ID:String) returns String;
    // function giveTotalAmount(OrderID:String) returns String;
}