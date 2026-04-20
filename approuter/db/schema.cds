namespace schema.db;

entity Hospital{
    Key ID:String;
        Name:String;
        Location:String;
        Specialties:String;
}

entity Doctor{
    Key ID:String;
        Name:String;
        Department:String;
        Contact:String;
}