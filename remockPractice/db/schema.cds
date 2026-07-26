namespace schema.db;

entity Students{
    Key ID : String;
        // @mandatory
        Name : String;
        @readonly
        Address : String;
        Age : String;
        Contact : Integer;
        Email:String @assert.format : '^.+@.+$';
        Fees : Integer;
        TeachRef:Association to many junction on TeachRef.StudID=$self; 
}

entity Teachers {
    Key ID : String;
        Name : String;
        Department : String;
        Address : String;
        Age : String;
        Contact : Integer;
        Email:String;
        Salary : Integer;
        StudRef:Association to many junction on StudRef.TeachID=$self;
}

entity junction{
    Key StudID: Association to Students;
    // @assert.target 
    Key TeachID: Association to Teachers;
}