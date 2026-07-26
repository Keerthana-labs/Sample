sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"mockpractice/test/integration/pages/teachList",
	"mockpractice/test/integration/pages/teachObjectPage"
], function (JourneyRunner, teachList, teachObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('mockpractice') + '/test/flp.html#app-preview',
        pages: {
			onTheteachList: teachList,
			onTheteachObjectPage: teachObjectPage
        },
        async: true
    });

    return runner;
});

