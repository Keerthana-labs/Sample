sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'pro2',
            componentId: 'VehicleList',
            contextPath: '/Vehicle'
        },
        CustomPageDefinitions
    );
});