namespace trainingStudents.db;

entity Students{
    key id:String;
        name:String;
        age:Integer;
        email:String
}

entity Courses{
    key id:String;
        title:String;
}