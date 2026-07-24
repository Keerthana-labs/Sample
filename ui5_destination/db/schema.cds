namespace schema.db;

entity Teachers {
    Key ID: String;
        Name: String;
        Email: String;
        Contact: String;
        Salary: Decimal;
        studRef:Association to Students;
}

entity Students{
    Key ID:String;
        Name:String;
        Email:String;
        Address:String;
        Fees:String;
        teaRef:Association to many Teachers on teaRef.studRef=$self;
}