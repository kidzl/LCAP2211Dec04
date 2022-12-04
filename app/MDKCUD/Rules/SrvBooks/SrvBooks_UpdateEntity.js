export default function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/MDKCUD/Services/service1.service').isDraftEnabled('SrvBooks')) {
        return clientAPI.executeAction({
            'Name': '/MDKCUD/Actions/SrvBooks/SrvBooks_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/MDKCUD/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'SrvBooks'
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/MDKCUD/Actions/SrvBooks/SrvBooks_UpdateEntity.action');
    }
}