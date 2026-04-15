sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'pro2',
            componentId: 'VehicleObjectPage',
            contextPath: '/Vehicle'
        },
        CustomPageDefinitions
    );
});