namespace schema.db;

using { managed } from '@sap/cds/common';

entity Employees {

    key ID : UUID;

    Name : String;
    Email : String;
    Department : String;
    DriverLicense : String;
    LicenseExpiry : Date;

    Vehicles : Association to many Vehicles on Vehicles.AssignedTo = $self;

    FuelLogs : Association to many FuelLogs on FuelLogs.Driver = $self;
}

entity Vehicles : managed {

    key ID : UUID;
    
    
    RegNumber : String;
    Make : String;
    Model : String;
    Year : Integer;

    Latitude: Decimal(9,6);
    Longitude: Decimal(9,6);
    timestamp: Timestamp;

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
    criticality : Integer;
    Image : String;
    virtual totalCost : String;

    AssignedTo : Association to one Employees;

    FuelLogs : Association to many FuelLogs on FuelLogs.Vehicle = $self;

    ServiceRecords : Association to many ServiceRecords on ServiceRecords.Vehicle = $self;

    MaintenanceAlerts : Association to many MaintenanceAlerts on MaintenanceAlerts.Vehicle = $self;

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
    Cost : Decimal(10,2);
    Description : String;
    NextServiceOdometer : Integer;

    Vehicle : Association to one Vehicles;
}

entity FuelLogs : managed {

    key ID : UUID;

    FuelDate : Date;
    Liters : Decimal(10,2);

    previousOdometer : Integer;
    currentOdometer : Integer;

    CostPerLiter : Decimal(10,2);
    FuelEfficiency : Decimal(10,2);
    TotalCost : Decimal(10,2);

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
        Completed;
    };

    Vehicle : Association to one Vehicles;
}

