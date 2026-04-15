namespace customHandler.srv;

using {customHandler.db as db} from '../db/schema';

service employeeApi{
    entity emp as projection on db.employee;

    //actions(post) and functions(get)

    function getAnnualSalary(id:String)
     returns Decimal(11,2);

    action promoteEmployee(empId:String,newRole:String)

}