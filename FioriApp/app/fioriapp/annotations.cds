using fioriAPI as service from '../../srv/service';

annotate service.stud with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Label: 'ID',
                Value: ID,
            },
            {
                $Type: 'UI.DataField',
                Label: 'Name',
                Value: Name,
            },
            {
                $Type: 'UI.DataField',
                Label: 'Department',
                Value: Department,
            },
            {
                $Type: 'UI.DataField',
                Label: 'Contact',
                Value: Contact,
            },
            {
                $Type: 'UI.DataField',
                Label: 'Age',
                Value: Age,
            },
            //For Progress Bar
            /*  {
                $Type: 'UI.DataFieldForAnnotation',
                Label: 'Rating',
               Target:@UI.DataPoint#Ratingprogress
            }, */
            {
                $Type: 'UI.DataField',
                Label: 'SAPURL',
                Value: SAPURL,
            },
             {
                $Type: 'UI.DataField',
                Label: 'Fees',
                Value: Fees,
            },
        
            /*  {
                 $Type : 'UI.DataField',
                 Label : 'Date',
                 Value : date,
             },
             {
                 $Type : 'UI.DataField',
                 Label : 'Time',
                 Value : time,
             }, */

            // {
            //     $Type : 'UI.DataFieldForAction',
            //     Action: 'service.EntityContainer/NewData',
            //     Label : 'NewData'

            // },
            {
                $Type: 'UI.DataFieldWithUrl',
                Label: 'Open SAP UI5',
                Value: 'SAP',
                Url  : 'https://help.sap.com/docs/SAPUI5'
            },

             {
                $Type : 'UI.DataFieldForAnnotation',
                Label:  'Student Details',
                Target: '@Communication.Contact',
    
            },
          

        ],

    },


    UI.FieldGroup #GeneratedGroup2: {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Label: 'ID',
                Value: Teachers.ID,
            },
            {
                $Type: 'UI.DataField',
                Label: 'Name',
                Value: Teachers.Name,
            },
            {
                $Type: 'UI.DataField',
                Label: 'Contact',
                Value: Teachers.Contact,
            },
            {
                $Type: 'UI.DataField',
                Label: 'Salary',
                Value: Teachers.Salary,
            },

        ],
    },

    UI.SelectionFields            : [
        ID,
        Name,
        Age,
        descriptionRef_Code


    ],

    UI.Facets                     : [
        {
            $Type : 'UI.ReferenceFacet',
            ID    : 'GeneratedFacet1',
            Label : 'Student Information',
            Target: '@UI.FieldGroup#GeneratedGroup',
        },
        {
            $Type : 'UI.ReferenceFacet',
            ID    : 'GeneratedFacet2',
            Label : 'Teacher Information',
            Target: '@UI.FieldGroup#GeneratedGroup2',
        },
        {
            $Type : 'UI.ReferenceFacet',
            ID    : 'GeneratedFacet3',
            Label : 'Teacher Information',
            Target: '@UI.LineItem#teacher',
        },
//File Upload
         {
            $Type : 'UI.ReferenceFacet',
            Label : 'Attachments',
            Target: '@UI.FieldGroup#Attachment'
        },
    ],



     UI.FieldGroup #Attachment    : {
 
        $Type: 'UI.FieldGroupType',
 
        Data : [
 
            {
                $Type: 'UI.DataField',
                Value: filename,
                Label: 'File Name'
            },
 
            {
                $Type: 'UI.DataField',
                Value: File,
                Label: 'Upload File'
            }
 
        ]
    },

    UI.HeaderInfo                 : {
        typeName      : 'Student',
        typeNamePlural: 'Students',
        title         : {value: Name},
        description   : {value: Department},
        ImageUrl      : SAPURL

    },

    UI.LineItem                   : [
        {
            $Type             : 'UI.DataField',
            Label             : '{i18n>ID}',
            Value             : ID,
            @HTML5.CssDefaults: {width: '50px'}
        },
        {
            $Type             : 'UI.DataField',
            Label             : '{i18n>Name}',
            Value             : Name,
            @HTML5.CssDefaults: {width: '70px'}
        },
        {
            $Type             : 'UI.DataField',
            Label             : '{i18n>Department}',
            Value             : Department,
            @HTML5.CssDefaults: {width: '150px'}
        },
        {
            $Type             : 'UI.DataField',
            Label             : '{i18n>Contact}',
            Value             : Contact,
            @HTML5.CssDefaults: {width: '120px'}
        },
        {
            $Type             : 'UI.DataField',
            Label             : '{i18n>myDate}',
            Value             : myDate,
            @HTML5.CssDefaults: {width: '180px'}
        }, 
        {
            $Type             : 'UI.DataField',
            Label             : '{i18n>ID}',
            Value             : ID,
            @HTML5.CssDefaults: {width: '50px'}
        },
         {
            $Type             : 'UI.DataField',
            Label             : '{i18n>Fees}',
            Value             : Fees,
            @HTML5.CssDefaults: {width: '50px'}
        },
         {
            $Type             : 'UI.DataField',
            Label             : '{i18n>Currency}',
            Value             : Currency,
            @HTML5.CssDefaults: {width: '50px'}
        },

        //Progress Bar
         /*  {
                $Type: 'UI.DataFieldForAnnotation',
                Label: 'Rating',
               Target:@UI.DataPoint#Ratingprogress
            }, */

    
        {
            $Type             : 'UI.DataField',
            Label             : '{i18n>Age}',
            Value             : Age,
            Criticality       : Criticality,
            @HTML5.CssDefaults: {width: '50px'}
        },
        // {
        //         $Type : 'UI.DataField',
        //         Label : 'detailedDescription',
        //         Value : descriptionRef.detailedDescription,
        //         @HTML5.CssDefaults: {width: '90px'}
        //     },

        {
            $Type             : 'UI.DataField',
            Label             : '{i18n>detailedDescription}',
            Value             : descriptionRef_Code,
            @HTML5.CssDefaults: {width: '80px'}
        },

        {
            $Type             : 'UI.DataFieldForAnnotation',
            Label             : '{i18n>Rating}',
            Target            : '@UI.DataPoint#Rating',
            @HTML5.CssDefaults: {width: '180px'}
        },
        {
            $Type      : 'UI.DataFieldForAction',
            Label      : 'updateContact',
            Action     : 'fioriAPI.EntityContainer/updateContact',
            Inline     : true,
            Criticality: #Positive,

        },
       /*   {
            $Type             : 'UI.DataField',
            Label             : 'StudentImage',
            Value             : StudentImage,
            Inline            : true,
            @HTML5.CssDefaults: {width: '110px'}
        }, */

          {
      $Type: 'UI.DataFieldWithUrl',
      Value: StudentImage,
      Url: StudentImage,
      Label: 'Image'
    },
    
        {
            $Type : 'UI.DataFieldForAction',
            Action: 'fioriAPI.EntityContainer/getStudentCount',
            Label : 'getStudentCount'

        },
        {
            $Type : 'UI.DataFieldForAction',
            Action: 'fioriAPI.EntityContainer/updateName',
            Label : 'updateName'

        },
        {
            $Type : 'UI.DataFieldForAction',
            Action: 'fioriAPI.EntityContainer/NewData',
            Label : 'NewData'

        },
        {
            $Type : 'UI.DataFieldForAction',
            Action: 'fioriAPI.giveRating',
            Label : 'Give Rating',
            Inline:true,
            Criticality:#Negative

        },
       /*  {
            $Type : 'UI.DataFieldForAction',
            Action: 'service.srv.fioriAPI.deleteStudent',
            Label : 'Delete Student'

        }, */
        


    ],
//For Rating
    
    UI.DataPoint #Rating          : {
        Value        : Rating,
        Visualization: #Rating
    },

//For Progress Bar
    // UI.DataPoint #Ratingprogress        : {
    //     Value        : Rating,
    //     Visualization: #Progress,
    //     TargetValue:5,
    // },

);

//Communication Contact
annotate service.stud with @(
    Communication.Contact : {
        fn   : Name,
        email:[{
            type:#work,
            address:EmailID
        }],
        tel : [{
            type:#work,
            uri:Contact
        }],
        photo: StudentImage
    },
 
    Common.IsNaturalPerson: true
);


annotate service.stud with @(UI.Identification: [{
    $Type : 'UI.DataFieldForAction',
    Label : 'promoteStudent',
    Action: 'service.srv.fioriAPI.EntityContainer/promoteStudent',
},
/*  {
    $Type:'UI.DataFieldForAction',
    Label:'NewData',
    Action: 'service.srv.fioriAPI.EntityContainer/NewData',
}, */
]

);

annotate service.stud with {
    ID              @title: '{@i18n>ID}';
    Name            @title: '{@i18n>Name}';
    Department      @title: '{@i18n>Department}';
    Contact         @title: '{@i18n>Contact}';
    Age             @title: '{@i18n>Age}';
    Criticality     @title: '{@i18n>Criticality}';
    SAPURL          @title: '{@i18n>SAPURL}';
    Rating          @title: '{@i18n>Rating}';
    myDate          @title: '{@i18n>myDate}';
    Teachers        @title: '{@i18n>Teachers}';
    descriptionRef  @title: '{@i18n>descriptionRef}';
};


annotate service.stud with @(UI.PresentationVariant: {
    Visualizations: ['@UI.LineItem'],
    MaxItems      : 3
});


annotate service.stud with {
    Age @(
        Common.ValueList               : {
            $Type         : 'Common.ValueListType',
            CollectionPath: 'stud',
            Parameters    : [{
                $Type            : 'Common.ValueListParameterInOut',
                LocalDataProperty: Age,
                ValueListProperty: 'Age',
            }, ],
        },
        Common.ValueListWithFixedValues: true,
    )
};

//value Help
annotate service.stud with {
    Name @Common.ValueList: {
        $Type         : 'Common.ValueListType',
        CollectionPath: 'stud',
        Parameters    : [{
            $Type            : 'Common.ValueListParameterInOut',
            ValueListProperty: 'Name',
        },

        ],
    }
};


annotate service.stud with {
    descriptionRef @Common.ValueList: {
        $Type         : 'Common.ValueListType',
        CollectionPath: 'descript',
        Parameters    : [{
            $Type            : 'Common.ValueListParameterInOut',
            // LocalDataProperty:descriptionRef_Code,
            ValueListProperty: 'Code'
        }, ]
    };
}

/* annotate  service.stud with actions{
    updateName @common.IsActionCritical:true;
};


annotate service.fiori-api  with  {
     promoteStudent @Common.IsActionCritical: true @Common.SideEffects     : {TargetProperties: ['status', 'criticality']};
};
 annotate service.stud with actions {
    promoteStudent @Common.SideEffects: {
        TargetProperties: ['status'],
    }
}; */


//another flexi column layout

annotate service.stud with @(UI.LineItem #teacher: [
    {
        $Type             : 'UI.DataField',
        Label             : 'ID',
        Value             : ID,
        @HTML5.CssDefaults: {width: '50px'}
    },

    {
        $Type             : 'UI.DataField',
        Label             : 'Name',
        Value             : Name,
        @HTML5.CssDefaults: {width: '120px'}
    },
    {
        $Type             : 'UI.DataField',
        Label             : 'Contact',
        Value             : Contact,
        @HTML5.CssDefaults: {width: '130px'}
    },
    {
        $Type             : 'UI.DataField',
        Label             : 'Salary',
        Value             : Salary,
        @HTML5.CssDefaults: {width: '140px'}
    },

]);

//File Upload
annotate service.stud with{
 
    File
    @Core.ContentDisposition.Filename:filename;
   
 
      filetype @Core.IsMediaType;
 
} ;


annotate service.stud with {
    SAPURL @UI.IsImageURL;
    StudentImage @UI.IsImageURL;
};


/* 
annotate service.stud with {
    Department @UI.Hidden;
}; */

annotate service.stud with {
    ID @Common.FieldControl: #ReadOnly;
};
