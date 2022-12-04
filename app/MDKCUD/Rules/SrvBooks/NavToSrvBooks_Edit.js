export default function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/MDKCUD/Services/service1.service').isDraftEnabled('SrvBooks')) {
        return clientAPI.executeAction({
            'Name': '/MDKCUD/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'SrvBooks'
                },
                'OnSuccess': '/MDKCUD/Actions/SrvBooks/NavToSrvBooks_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/MDKCUD/Actions/SrvBooks/NavToSrvBooks_Edit.action');
    }
}