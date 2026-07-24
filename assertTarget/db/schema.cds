namespace schema.db;

entity Hospital {
    key ID      : Integer;
        Name    : String;
        Address : String;
        Rating  : Integer;

        Doctors : Association to many Doctor
                    on Doctors.Hospital = $self;
}

entity Doctor {
    key ID             : Integer;
        Name           : String;
        Specialization : String;
        Contact        : String;
        Location       : String;

        Hospital : Association to one Hospital @assert.target;
}