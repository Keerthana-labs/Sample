sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'fullstack',
            componentId: 'orderList',
            contextPath: '/order'
        },
        CustomPageDefinitions
    );
});