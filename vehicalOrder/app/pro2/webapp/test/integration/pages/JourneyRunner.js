sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"pro2/test/integration/pages/VehicleList",
	"pro2/test/integration/pages/VehicleObjectPage"
], function (JourneyRunner, VehicleList, VehicleObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('pro2') + '/test/flp.html#app-preview',
        pages: {
			onTheVehicleList: VehicleList,
			onTheVehicleObjectPage: VehicleObjectPage
        },
        async: true
    });

    return runner;
});

