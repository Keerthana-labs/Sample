namespace service.srv;

using {schema.db as db} from '../db/schema';

service xsuaaAPI{
    entity stud @(restrict:[{
        grant:'READ',
        to:'AppViewer'
    },
    {
        grant:['CREATE','UPDATE'],
        to:'Admin'
    },
    {
        grant:'DELETE',
        to:'Manager'
    }
]) as projection on db.Students;

entity course as projection on db.Courses;
}