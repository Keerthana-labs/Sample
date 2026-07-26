namespace schema.db;


@cds.persistance.skip
@cds.persistance.table 
@cds.persistance.exists
@cds.redirection.target
@cds.autoexpose
entity Students {
    Key ID : String;
        @mandatory
        Name : String;
        @readonly
        Address : String;
        Age : String @assert.range:[20,30];
        Contact : Integer @assert.format:'^[0-9]{10}$';
        Email:String @assert.format:'^.+@.+$';
        Fees : Integer;
        TeachRef:Association to many junction on TeachRef.StudID=$self; 
}
@cds.api.ignore

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
    @assert.target 
    Key TeachID: Association to Teachers;
}

