sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'LCAP2211ECCCICD.FioriListApp',
            componentId: 'SrvBooksList',
            entitySet: 'SrvBooks'
        },
        CustomPageDefinitions
    );
});