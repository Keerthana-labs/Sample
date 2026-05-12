namespace schema.db;

entity Teacher {
    key ID       : String;
        Name     : String;
        Contact  : String;
        Salary   : String;
        Students : Association to   Student ;
}
entity Student {

    key ID        : String;
        StudentImage:String;
        Name      : String;
        Department: String;
        Contact   : String;
        EmailID:String;
        Age:String;
        Criticality:Integer;
        @Measures.ISOCurrency : Currency
        Fees:String;
        Currency:String;
        SAPURL:String;
        Rating:Integer; //default: 0;
        myDate     : Date @UI.DateTimeStyle:'short';
        Teachers   : Association to many Teacher on Teachers.Students =$self;

        descriptionRef : Association to Description;

//File Uploaded
         File:LargeBinary
        @Core.MediaType:filetype;
        filetype:String(255);
        filename: String(255);
}

entity Description {
    key Code:String;
        detailedDescription:String;
        // Students : Association to many Student on Students.DescripRef = $self;
}


