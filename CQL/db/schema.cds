namespace schema.db;

entity Employee{
    Key EmpID:String;
        Name:String;
        Department:String;
        Salary:Decimal(10,2);
        Age:Integer;
        City:String;
        JoinDate:Date;
}