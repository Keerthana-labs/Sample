namespace my.hospital;

entity Hospital {
  key ID        : String;
  name          : String;
  city          : String;

  patients      : Association to  many Patient on patients.hospital = $self;

  doctor      : Association to  many Doctor on doctor.hospital = $self;
}

entity Patient {
  key ID        : String;
  name          : String;
  age           : Integer;
  disease       : String;

  hospital      : Association to Hospital;
}

entity Doctor  {
  key ID        : String;
  Name          : String;
  Department    : String;
  Contact       : String;

  hospital      : Association to Hospital;
}