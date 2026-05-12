sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"fioriapp/test/integration/pages/studList",
	"fioriapp/test/integration/pages/studObjectPage"
], function (JourneyRunner, studList, studObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('fioriapp') + '/test/flp.html#app-preview',
        pages: {
			onThestudList: studList,
			onThestudObjectPage: studObjectPage
        },
        async: true
    });

    return runner;
});

