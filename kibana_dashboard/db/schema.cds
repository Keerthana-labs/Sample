namespace schema.db;

entity Department{
    Key ID:String;
        Name:String;
        Category:String;
        NoOfEmployee:String;
        EmpRef:Association to many Employee on EmpRef.DeptRef=$self;
}

entity Employee{
    Key ID:String;
        Name:String;
        Contact:String;
        Address:String;
        DeptRef:Association to one Department;
}