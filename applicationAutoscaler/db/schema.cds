namespace schema.db;

entity teachers {
    Key ID:String;
        Name: String;
        Dept:String;
        Salary:Integer;
        studRef:Association to many Students on studRef.teachRef = $self;   
}

entity Students {
    Key ID:String;
        Name:String;
        Fees:String;
        Details:String;
        teachRef:Association to one  teachers;
}


