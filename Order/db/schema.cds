namespace schema.db;

// using{managed,temporal} from '@sap/cds/common';

entity Order{
    Key ID:String;
        Name:String;
        Status:String;
        Date:String;
}

type Location{
    City:String;
    Pincode:String;
}