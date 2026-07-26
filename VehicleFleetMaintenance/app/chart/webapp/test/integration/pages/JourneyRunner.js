sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"chart/test/integration/pages/FuelEfficiencyReportList",
	"chart/test/integration/pages/FuelEfficiencyReportObjectPage"
], function (JourneyRunner, FuelEfficiencyReportList, FuelEfficiencyReportObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('chart') + '/test/flp.html#app-preview',
        pages: {
			onTheFuelEfficiencyReportList: FuelEfficiencyReportList,
			onTheFuelEfficiencyReportObjectPage: FuelEfficiencyReportObjectPage
        },
        async: true
    });

    return runner;
});

