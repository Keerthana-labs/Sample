namespace service.srv;

using {schema.db as db} from '../db/schema';

service API @(impl:'./capm.js')@(restrict:[{
    grant: 'CREATE',
    to: 'Admin'
},
{
    grant:['READ','UPDATE'],
    to:'User'
}]){
    entity teach as projection on db.teachers;
    entity stud as projection on db.Students;
    
    //view
    /* entity FetchAll as SELECT from db.teachers{
        *
    }

    entity Fetch as SELECT from db.teachers{
        Name,
        Salary
    } 
    
    entity count as SELECT from db.teachers{
        count(Salary) as counting
    }
    
    entity min as SELECT from db.teachers{
        min(Salary) as counting
    }
    
    entity max as SELECT from db.teachers{
        max(Salary) as counting
    }
    
    entity sum as SELECT from db.teachers{
        sum(Salary) as counting
    }

    entity groupby as SELECT from db.teachers{
        studRef,
        count(*) as counting
    } group by studRef;
    
    entity groupbyname as SELECT from db.teachers{
        studRef.Name,
        count(*) as countofstudents
    } group by studRef; */

}