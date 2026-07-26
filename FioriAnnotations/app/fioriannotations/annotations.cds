using service.srv.hospitalAPI as service from '../../srv/annotations';
annotate service.Hos with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'ID',
                Value : ID,
            },
            {
                $Type : 'UI.DataField',
                Label : 'name',
                Value : name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'city',
                Value : city,
            },
        
        ],
    },
     UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'ID',
                Value : doctor.ID,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Name',
                Value : doctor.Name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Department',
                Value : doctor.Department,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Contact',
                Value : doctor.Contact,
            }
        
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
         {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet2',
            Label : 'doctor Info',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet3',
            Label : 'doctor',
            Target : 'doctor/@UI.LineItem#Doc',
        }
       
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'ID',
            Value : ID,
        },
        {
            $Type : 'UI.DataField',
            Label : 'name',
            Value : name,
        },
        {
            $Type : 'UI.DataField',
            Label : 'city',
            Value : city,
        },
        
        
    ],
);

annotate service.Doc with @(
    UI.FieldGroup #GeneratedGroup7 : {
        $Type : 'UI.FieldGroupType',
        Data : [
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
                Label : 'Department',
                Value : Department,
            },
        
        ],
    },

      UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet7',
            Label : 'Doctor Info',
            Target : '@UI.FieldGroup #GeneratedGroup7',
        }
      ],
    UI.LineItem #Doc : [
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
            Label : 'Department',
            Value : Department,
        },
          {
            $Type : 'UI.DataField',
            Label : 'Contact',
            Value : Contact,
        },
    ],
);
annotate service.Pat with {
    age @UI.Hidden;
};




