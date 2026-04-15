sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"ramila/test/integration/pages/VehicleList",
	"ramila/test/integration/pages/VehicleObjectPage"
], function (JourneyRunner, VehicleList, VehicleObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('ramila') + '/test/flp.html#app-preview',
        pages: {
			onTheVehicleList: VehicleList,
			onTheVehicleObjectPage: VehicleObjectPage
        },
        async: true
    });

    return runner;
});

