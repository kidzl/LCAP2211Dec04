sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'LCAP2211ECCCICD/FioriCUD/test/integration/FirstJourney',
		'LCAP2211ECCCICD/FioriCUD/test/integration/pages/SrvBooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, SrvBooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('LCAP2211ECCCICD/FioriCUD') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSrvBooksObjectPage: SrvBooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);