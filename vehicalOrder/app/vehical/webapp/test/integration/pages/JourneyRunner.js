sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"vehical/test/integration/pages/VehicleList",
	"vehical/test/integration/pages/VehicleObjectPage"
], function (JourneyRunner, VehicleList, VehicleObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('vehical') + '/test/flp.html#app-preview',
        pages: {
			onTheVehicleList: VehicleList,
			onTheVehicleObjectPage: VehicleObjectPage
        },
        async: true
    });

    return runner;
});

