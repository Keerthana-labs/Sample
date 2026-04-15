namespace schema.db;

entity Student{
    key Id:String;
        Name:String;
        Location:String;
        PhoneNo:String;
        courseRef:Association to Student;
}

entity Course{
    key Id:String;
        Name:String;
        Duration:String;
        // studentRef:Association to many Student on studentRef.courseRef=$self;

}