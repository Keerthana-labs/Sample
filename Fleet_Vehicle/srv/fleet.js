const cds = require('@sap/cds');
const { message } = require('@sap/cds/lib/log/cds-error');
const { UPDATE, SELECT } = require('@sap/cds/lib/ql/cds-ql');

module.exports = cds.service.impl(async function () {
    const {Vehicles, MaintenanceAlerts, Employees} = this.entities;


//FleetService
    this.on('assignVehicle',async (req)=>{
        const {employeeID, vehicleID} = req.data;

        const vehicle = await SELECT.one.from(Vehicles).where({ID : vehicleID});
        
        const Employe = await SELECT.one.from(Employees).where({ID : employeeID});
         if(Vehicles.status && Vehicles.status === 'in_use'){
            return req.error(400,'vehicle is already in use')
         }

        await UPDATE('Vehicles').set({status:'InUse'}).where({ID:vehicleID});

        // return {message:'Vehicle Assigned Successfully'}

        console.log('Vehicle Assigned Successfully');
        
    });

    this.on('releaseVehicle',async (req)=>{
        const {vehicleID} = req.data;
        
        await UPDATE('Vehicles').set({status:'Available'}).where({ID:vehicleID});

        // return {message:'Vehicle released successfully'};

        console.log('Vehicle released successfully');
    });

    this.on('updateOdometer',async (req)=>{
        const {vehicleID,newReading} = req.data;
        const vehicle = SELECT.one.from(Vehicles).where({ID : vehicleID});

        if(!vehicle){
            return req.error(400,'vehicleID is not found')
        }

        if(newReading < vehicle.odometer){
            req.error('Odometer reading cannot be negative');
        }

        const result = await UPDATE('Vehicles').set({odometer:newReading}).where({ID:vehicleID});

         console.log('Odometer updated successfully:',result);

        return {message: 'Odometer updated successfully'};

});
this.on('getVehiclesDueForService', async (req) => {

    const today = new Date();

    const futureDate = new Date();
    futureDate.setDate(today.getDate() + 30);

    const vehicles = await SELECT.from('Vehicles')
        .where({
            NextServiceDue: { '<=': futureDate }
        });

    console.log("Vehicles due for service:", vehicles);

    return vehicles;
});

//MaintenanceService
this.on('logService',async (req)=>{
    const{vehicleID, serviceDate} = req.data;

    await UPDATE('Vehicles').set({NextServiceDue:serviceDate}).where({ID:vehicleID});

    const vehicle = await SELECT.one.from('Vehicles').where({ID:vehicleID});

    console.log("Service logged",vehicle);

    return {
        message:"Service updated successfully",
        vehicle
    };
});

this.on('closeAlert', async (req) => {

    const { alertID } = req.data;

    await UPDATE('MaintenanceAlerts').set({ status: 'Resolved' }).where({ ID: alertID });

    const alert = await SELECT.one.from('MaintenanceAlerts').where({ ID: alertID });

    console.log("Alert Closed:", alert);

    return {
        message: "Alert closed successfully",
        alert
    };
});



//Condition-1
/* this.after('UPDATE', 'Vehicles', async (data, req) => {

    const vehicle = Array.isArray(data) ? data[0] : data;

    if (!vehicle) return;

    const { ID, Odometer, NextServiceOdometer } = vehicle;

    if (Odometer >= NextServiceOdometer) {

        await INSERT.into('MaintenanceAlerts').entries({
            ID: cds.utils.uuid(),
            status: 'Open',
            message: 'Service due based on odometer threshold',
            Vehicle_ID: ID
        });

        console.log("Maintenance Alert created automatically");
    }
}); */


this.after('UPDATE', 'Vehicles', async (data) => {

    console.log("AFTER UPDATE TRIGGERED:", data);

    const vehicle = Array.isArray(data) ? data[0] : data;

    if (!vehicle?.ID) {
        console.log("No vehicle data received");
        return;
    }

    const fullVehicle = await SELECT.one.from('Vehicles')
        .where({ ID: vehicle.ID });

    console.log("FULL VEHICLE:", fullVehicle);

    if (
        fullVehicle.Odometer >= fullVehicle.NextServiceOdometer
    ) {
        console.log("Condition matched - creating alert");

        await INSERT.into('MaintenanceAlerts').entries({
            ID: cds.utils.uuid(),
            Status: 'Active',
            AlertType: 'ServiceDue',
            Vehicle_ID: fullVehicle.ID
        });

        console.log("Alert created successfully");
    } else {
        console.log("Condition NOT matched");
    }
});
    
})

