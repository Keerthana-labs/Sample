namespace document.srv;

using {document.db as db} from '../db/ai';

service documentAPI{
    entity teacher as projection on db.Teacher;
}


