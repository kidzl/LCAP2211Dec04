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

    @odata.draft.enabled
    entity SrvBooks as
        projection on my.Books
        {
            *
        };
}

annotate LCAP2211ECCCICDService with @requires :
[
    'authenticated-user'
];
