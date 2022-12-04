sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'LCAP2211ECCCICD.FioriCUD',
            componentId: 'SrvBooksObjectPage',
            entitySet: 'SrvBooks'
        },
        CustomPageDefinitions
    );
});