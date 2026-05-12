

using{schema.db as db} from '../db/schema';

service fioriAPI{
    @odata.draft.enabled

    // @Common.ResultSetSizeLimit: 6

    
    //Bound Action 
    entity stud as projection on db.Student actions{
        action giveRating(
            rating:Decimal(3,1)
        ) returns Boolean;
    };
    entity teacher as projection on db.Teacher;
    entity descript as projection on db.Description;

    action updateContact(ID:String, Contact: String) returns String;
    function getStudentCount(Department:String) returns Integer;


    action promoteStudent(ID: String,Department:String)
    function getStudentAverageAge(Department: String) returns Integer;


    action updateName(ID:String,Name:String) returns String;

    action NewData(ID:String,Name:String,Department:String,Contact:String,Age:String) returns String;

    // function deleteStudent(studentID:String) returns String;
    
}