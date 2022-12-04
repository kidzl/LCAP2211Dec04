sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'LCAP2211ECCCICD/FioriListApp/test/integration/FirstJourney',
		'LCAP2211ECCCICD/FioriListApp/test/integration/pages/SrvBooksList',
		'LCAP2211ECCCICD/FioriListApp/test/integration/pages/SrvBooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, SrvBooksList, SrvBooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('LCAP2211ECCCICD/FioriListApp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSrvBooksList: SrvBooksList,
					onTheSrvBooksObjectPage: SrvBooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);