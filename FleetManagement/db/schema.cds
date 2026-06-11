namespace schema.db;

using { managed } from '@sap/cds/common';

entity Employees {

    key ID : UUID;

    Name : String;
    Email : String;
    Department : String;
    DriverLicense : String;
    LicenseExpiry : Date;
    VehicleRef : Association to many Vehicles on VehicleRef.AssignedTo = $self;
    FuelLogsRef : Association to many FuelLogs on FuelLogsRef.Driver = $self;
}

entity Vehicles : managed {

    key ID : UUID;
    RegNumber : String;
    Make : String;
    Model : String;
    Year : Integer;
    
    FuelType : String enum {
        Petrol;
        Diesel;
        Electric;
        Hybrid;
    };
    
    Status : String enum {
        Available;
        InUse;
        Maintenance;
        Retired;
    };
    Odometer : Integer;
    NextServiceDue : Date;
    criticality:Integer;
    Image:String;

    AssignedTo : Association to one Employees;

    FuelLogs : Composition of many FuelLogs on FuelLogs.Vehicle = $self;

    ServiceRecordsRef : Composition of many ServiceRecords on ServiceRecordsRef.Vehicle = $self;

    MaintenanceAlerts : Composition of many MaintenanceAlerts on MaintenanceAlerts.Vehicle = $self;
}

entity ServiceRecords : managed {

    key ID : UUID;

    ServiceType : String enum {
        OilChange;
        TireRotation;
        BrakeInspection;
        GeneralService;
    };

    ServiceDate : Date;
    ServiceCenter : String;
    Odometer : Integer;
    Cost : Decimal;
    Description : String;
    NextServiceOdometer : Integer;
    Vehicle : Association to one Vehicles;
}

entity FuelLogs : managed {

    key ID : UUID;
    FuelDate : Date;
    Liters : Decimal;
    previousOdometer: Integer;
    currentOdometer: Integer;
    CostPerLiter : Decimal;
    FuelEfficiency : Decimal;
    TotalCost : Decimal;
    Vehicle : Association to one Vehicles;
    Driver : Association to one Employees;
}

entity MaintenanceAlerts : managed {

    key ID : UUID;

    AlertType : String enum {
        ServiceDue;
        InsuranceExpiry;
        Other;
    };
    VehicleNumber : String; 
    DueDate : Date; 
    DueOdometer : Integer;

    AlertStatus : String enum {
       Open;
       Closed;
       Completed
    };

    Vehicle : Association to one Vehicles;
}


