sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'attachmentapp/test/integration/FirstJourney',
		'attachmentapp/test/integration/pages/FilesMain'
    ],
    function(JourneyRunner, opaJourney, FilesMain) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('attachmentapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheFilesMain: FilesMain
                }
            },
            opaJourney.run
        );
    }
);