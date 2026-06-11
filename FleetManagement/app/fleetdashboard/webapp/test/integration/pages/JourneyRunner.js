sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"fleetdashboard/test/integration/pages/VehiclesList",
	"fleetdashboard/test/integration/pages/VehiclesObjectPage",
	"fleetdashboard/test/integration/pages/MaintenanceAlertsObjectPage"
], function (JourneyRunner, VehiclesList, VehiclesObjectPage, MaintenanceAlertsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('fleetdashboard') + '/test/flp.html#app-preview',
        pages: {
			onTheVehiclesList: VehiclesList,
			onTheVehiclesObjectPage: VehiclesObjectPage,
			onTheMaintenanceAlertsObjectPage: MaintenanceAlertsObjectPage
        },
        async: true
    });

    return runner;
});

