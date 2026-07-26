using service.srv.edexTechAPI as service from '../../srv/service';
annotate service.teach with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'validFrom',
                Value : validFrom,
            },
            {
                $Type : 'UI.DataField',
                Label : 'validTo',
                Value : validTo,
            },
            {
                $Type : 'UI.DataField',
                Label : 'ID',
                Value : ID,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Name',
                Value : Name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Contact',
                Value : Contact,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Email',
                Value : Email,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Salary',
                Value : Salary,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Address',
                Value : Address,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'ID',
            Value : ID,
        },
        {
            $Type : 'UI.DataField',
            Label : 'validFrom',
            Value : validFrom,
        },
        {
            $Type : 'UI.DataField',
            Label : 'validTo',
            Value : validTo,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Name',
            Value : Name,
        },
         {
                $Type : 'UI.DataField',
                Label : 'Salary',
                Value : Salary,
            },
        {
            $Type : 'UI.DataField',
            Label : 'Contact',
            Value : Contact,
        },
        {
            $Type:'UI.DataFieldForAction',
            Label:'Update Salary',
            Action:'service.srv.edexTechAPI.EntityContainer/updateSalary'
        }
    ],
);

