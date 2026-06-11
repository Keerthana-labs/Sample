namespace service.srv;

using {schema.db as db} from '../db/schema';

service ShoppingAPI @(impl:'./xsuaa.js') @(restrict:[
    {
        grant : '*',
        to : 'Administrator'
    },
    {
        grant : ['READ','UPDATE'],
        to : 'User'
    }
    ]){

    entity order as projection on db.order;
    entity customer as projection on db.customer;
    entity shopping as projection on db.shopping;

}