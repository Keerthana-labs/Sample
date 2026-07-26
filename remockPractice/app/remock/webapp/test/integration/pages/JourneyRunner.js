sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"remock/test/integration/pages/studList",
	"remock/test/integration/pages/studObjectPage"
], function (JourneyRunner, studList, studObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('remock') + '/test/flp.html#app-preview',
        pages: {
			onThestudList: studList,
			onThestudObjectPage: studObjectPage
        },
        async: true
    });

    return runner;
});

