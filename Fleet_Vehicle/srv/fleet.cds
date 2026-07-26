namespace service.fleet;

using {schema.db} from '../db/schema';

service FleetService{
    entity Vehicles as projection on db.Vehicles;
    entity Employees as projection on db.Employees;

    action assignVehicle(employeeID : UUID,vehicleID : UUID);

    action releaseVehicle(vehicleID: UUID);

    action updateOdometer(vehicleID: UUID,newReading: Integer);

    function getVehiclesDueForService() returns array of Vehicles;

};

service MaintenanceService {
    
    // @odata.draft.enabled

    entity ServiceRecords as projection on db.ServiceRecords;
    entity FuelLogs as projection on db.FuelLogs;
    entity MaintenanceAlerts as projection on db.MaintenanceAlerts;

    action logService(vehicleID : UUID,serviceDate : String,)
    action closeAlert(alertID : UUID)
};




