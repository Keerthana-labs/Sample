sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"fleetmanagerdashboard/test/integration/pages/VehiclesList",
	"fleetmanagerdashboard/test/integration/pages/VehiclesObjectPage",
	"fleetmanagerdashboard/test/integration/pages/MaintenanceAlertsObjectPage"
], function (JourneyRunner, VehiclesList, VehiclesObjectPage, MaintenanceAlertsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('fleetmanagerdashboard') + '/test/flp.html#app-preview',
        pages: {
			onTheVehiclesList: VehiclesList,
			onTheVehiclesObjectPage: VehiclesObjectPage,
			onTheMaintenanceAlertsObjectPage: MaintenanceAlertsObjectPage
        },
        async: true
    });

    return runner;
});

