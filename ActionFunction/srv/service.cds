namespace service.srv;

using {schema.db as db} from '../db/schema';

service AcfuncAPI @(impl:'./acfunc.js'){
 

  entity Emp as projection on db.Employee actions {
    
    action giveBonus(bonus: String) returns String;
    function getEmployeeCount() returns Integer;
};

  entity Dept as projection on db.Department;

}










//Unbound action & function
  /*   action Emp.giveBonus(empID:String, bonus:String) returns String;

    function Dept.getEmployeeCount() returns Integer; */


//Annotation
//@(impl:'./acfunc.js')