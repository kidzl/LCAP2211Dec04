sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'LCAP2211ECCCICD.FioriListApp',
            componentId: 'SrvBooksObjectPage',
            entitySet: 'SrvBooks'
        },
        CustomPageDefinitions
    );
});