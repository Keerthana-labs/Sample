namespace schema.db;

using {managed,temporal} from '@sap/cds/common';

entity Teachers : managed,temporal{
    Key ID:String;
        @mandatory Name:String;

        @assert.format : '^[0-9]{10}$'
        Contact:String;
 
        @assert.format:'^.+@.+$'
        Email:String;

        @assert.range:[10000,15000] 
        Salary:String;
        Address:String;
        studRef:Association to many edexTech on studRef.TeachID=$self;
}

entity Students{
        Name:String;
        Phone:String;
        Email:String;
        Fees:String;
        Address:Address;
        teachRef:Association to many edexTech on teachRef.StudID=$self;
}

entity edexTech{
    Key TeachID:Association to Teachers;
    key StudID:Association to Students; 
}

type Address{
    Street:String;
    City:String;
    Pincode:String;
}

entity Trainer{
    Key ID:String;
    Name:String;
    @assert.format : '[^.+@.+$]'
    Email:String;
    @assert.range: [16000,20000]
    Salary:String;
    @assert.format : ['^[0-9]{10}$']
    Phone:String;
    
}

entity Order{
    Key ID:String;
        Name:String;
        OrderDate:Integer;
        Place:String;
        Status:String;
        location:Location;
}

type Location{
    City:String;
    Pincode:String;
}