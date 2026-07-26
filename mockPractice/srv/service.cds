namespace service.srv;

using{schema.db as db} from '../db/schema';

service edexTechAPI @(impl:'./mock.js'){
      entity teach as projection on db.Teachers;
      entity stud as projection on db.Students;
      entity edexTech as projection on db.edexTech;
      entity order as projection on db.Order;

      // action updateSalary (ID:String,Salary:String) returns many String;

      action updateStatus (ID:String,Status:String) returns many String;
}





