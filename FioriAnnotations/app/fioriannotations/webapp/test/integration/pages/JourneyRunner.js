sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"fioriannotations/test/integration/pages/HosList",
	"fioriannotations/test/integration/pages/HosObjectPage"
], function (JourneyRunner, HosList, HosObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('fioriannotations') + '/test/flp.html#app-preview',
        pages: {
			onTheHosList: HosList,
			onTheHosObjectPage: HosObjectPage
        },
        async: true
    });

    return runner;
});

