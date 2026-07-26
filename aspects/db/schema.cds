namespace schema.db;

using {cuid,managed,temporal} from '@sap/cds/common';

entity Person:cuid,managed{
        Name:String;
        Address:String;
        Contact:Integer;
}

aspect TransactionHistory{
    Date:Integer;
    Name:String;
}

entity Passbook:temporal,TransactionHistory{
    Key ID:String;
    BranchName:String;
    Location:localized String;
}
