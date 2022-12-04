using { LCAP2211ECCCICD as my } from '../db/schema';

using LCAP2211ECCCICD from '../db/schema';

@path : 'service/LCAP2211ECCCICD'
service LCAP2211ECCCICDService
{
    entity SrvAuthors as
        projection on my.Authors
        {
            *
        };

    annotate SrvAuthors with @restrict :
    [
        { grant : [ 'READ' ], to : [ 'BookRoleCheck' ] }
    ];

    @odata.draft.enabled
    entity SrvBooks as
        projection on my.Books
        {
            *
        };

    annotate SrvBooks with @restrict :
    [
        { grant : [ 'READ', 'CREATE' ], to : [ 'BookRoleCheck' ] },
        { grant : [ 'UPDATE' ], to : [ 'BookRoleCheck' ], where : 'price > 50' },
        { grant : [ 'DELETE' ], to : [ 'BookRoleCheck' ], where : 'stock > 5 and price > 30' }
    ];
}

annotate LCAP2211ECCCICDService with @requires :
[
    'authenticated-user',
    'BookRoleCheck'
];
