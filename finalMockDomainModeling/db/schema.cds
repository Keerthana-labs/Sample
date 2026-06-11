namespace schema.db;

entity Teachers{
    Key ID:String;
        Name:String;
        Dept:String;
        Salary:String;
        teaRef:Association to many Tutorial on teaRef.TeachID=$self;

}

entity Students{
    Key ID:String;
        Name:String;
        Contact:String;
        Address:String;
        Fees:String;
        studRef:Association to many Tutorial on studRef.StudID=$self;
}

entity Tutorial{
    Key TeachID:Association to Teachers; 
    Key StudID:Association to Students;
}