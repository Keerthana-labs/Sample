sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"fullstackapp/test/integration/pages/HosList",
	"fullstackapp/test/integration/pages/HosObjectPage"
], function (JourneyRunner, HosList, HosObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('fullstackapp') + '/test/flp.html#app-preview',
        pages: {
			onTheHosList: HosList,
			onTheHosObjectPage: HosObjectPage
        },
        async: true
    });

    return runner;
});

