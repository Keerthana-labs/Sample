sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"fullstack/test/integration/pages/orderList",
	"fullstack/test/integration/pages/orderObjectPage"
], function (JourneyRunner, orderList, orderObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('fullstack') + '/test/flp.html#app-preview',
        pages: {
			onTheorderList: orderList,
			onTheorderObjectPage: orderObjectPage
        },
        async: true
    });

    return runner;
});

