namespace trainingStudents.srv;

using {trainingStudents.db as db } from '../db/schema';

service trainingStudentsApi {

    entity Students as projection on db.Students;

}



