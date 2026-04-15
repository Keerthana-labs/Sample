namespace localize.db;

@odata.draft.enabled
entity Computer{
    key ID     : Integer;
    Name       : localized String @title : '{i18n>Name}';
    Brand      : localized String  @title : '{i18n>Brand}';
    Processor  : String;
    RAM        : Integer;
    Price      : Decimal(15,2);
}
