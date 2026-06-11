using service.fleet.FleetService as service from '../../srv/fleet';

annotate service.Vehicles with @(
    UI.FieldGroup #GeneratedGroup: {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Label: 'RegNumber',
                Value: RegNumber,
            },
            {
                $Type: 'UI.DataField',
                Label: 'Make',
                Value: Make,
            },
            {
                $Type: 'UI.DataField',
                Label: 'Model',
                Value: Model,
            },
            {
                $Type: 'UI.DataField',
                Label: 'Year',
                Value: Year,
            },
            {
                $Type: 'UI.DataField',
                Label: 'FuelType',
                Value: FuelType,
            },
            {
                $Type: 'UI.DataField',
                Label: 'Status',
                Value: Status,
            },
            {
                $Type: 'UI.DataField',
                Label: 'Odometer',
                Value: Odometer,
            },
            {
                $Type: 'UI.DataField',
                Label: 'NextServiceDue',
                Value: NextServiceDue,
            },
        ],
    },


    UI.Facets                    : [
        {
            $Type : 'UI.ReferenceFacet',
            ID    : 'GeneratedFacet1',
            Label : 'General Information',
            Target: '@UI.FieldGroup#GeneratedGroup',
        },
        {
            $Type : 'UI.ReferenceFacet',
            ID    : 'FuelLogsFacet',
            Label : 'Fuel Logs',
            Target: 'FuelLogs/@UI.LineItem',
        },
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'ServiceHistoryFacet',
            Label : 'Service History',
            Target : '@UI.LineItem#FuelLogs'
        }
    ],

    UI.HeaderInfo                : {
        TypeName   : 'Vehicles',

        Title      : {Value: Model},
        Description: {Value: RegNumber},
        ImageUrl:Image

    },
    UI.LineItem                  : [

        {Value: RegNumber},

        {
            $Type      : 'UI.DataFieldForAction',
            Action     : 'service.fleet.FleetService.Maintenance',
            Label      : 'Maintenance',
            Inline     : true,
            Criticality: #Critical
        },

        {
            $Type      : 'UI.DataFieldForAction',
            Action     : 'service.fleet.FleetService.retireVehicle',
            Label      : 'Retire Vehicle',
            Inline     : true,
            Criticality: #Negative
        },

        {
            $Type: 'UI.DataField',
            Label: 'RegNumber',
            Value: RegNumber,
        },
        {
            $Type: 'UI.DataField',
            Label: 'Image',
            Value: Image,

        },
        {
            $Type: 'UI.DataField',
            Label: 'Make',
            Value: Make,
        },
        {
            $Type: 'UI.DataField',
            Label: 'Model',
            Value: Model,
        },
        {
            $Type: 'UI.DataField',
            Label: 'Year',
            Value: Year,
        },
        {
            $Type: 'UI.DataField',
            Label: 'FuelType',
            Value: FuelType,
        },
        {
            $Type      : 'UI.DataField',
            Label      : 'Status',
            Value      : Status,
            Criticality: criticality
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action: 'service.fleet.FleetService.EntityContainer/updateOdometer',
            Label : 'Update Odometer',
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action: 'service.fleet.FleetService.EntityContainer/assignVehicle',
            Label : 'Assign Vehicle',
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action: 'service.fleet.FleetService.EntityContainer/releaseVehicle',
            Label : 'Release Vehicle',
        },


    ],


    UI.LineItem #FuelLogs        : [

        {
            $Type: 'UI.DataField',
            Label: 'Fuel Date',
            Value: FuelLogs.FuelDate,
        },

        {
            $Type: 'UI.DataField',
            Label: 'Liters',
            Value: FuelLogs.Liters,
        },

        {
            $Type: 'UI.DataField',
            Label: 'Total Cost',
            Value: FuelLogs.TotalCost,
        },

        {
            $Type: 'UI.DataField',
            Label: 'Current Odometer',
            Value: FuelLogs.currentOdometer,
        }

    ]

);


annotate service.Vehicles with {
    AssignedTo @Common.ValueList: {
        $Type         : 'Common.ValueListType',
        CollectionPath: 'Employees',
        Parameters    : [
            {
                $Type            : 'Common.ValueListParameterInOut',
                LocalDataProperty: AssignedTo_ID,
                ValueListProperty: 'ID',
            },
            {
                $Type            : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty: 'Name',
            },
            {
                $Type            : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty: 'Email',
            },
            {
                $Type            : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty: 'Department',
            },
            {
                $Type            : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty: 'DriverLicense',
            },
        ],
    }
};

// annotate service.Vehicles with @(
//     UI.LineItem #History : [
//         {
//             $Type : 'UI.DataField',
//             Label : 'Fuel Date',
//             Value : FuelLogsRef.FuelDate,
//         },
//         {
//             $Type : 'UI.DataField',
//             Label : 'Liters',
//             Value : FuelLogsRef.Liters,
//         }
//     ] 
// );


annotate service.FuelLogs with @(

    UI.CreateHidden: false,


    UI.LineItem    : [

        {
            $Type: 'UI.DataField',
            Label: 'Fuel Date',
            Value: FuelDate,
        },

        {
            $Type: 'UI.DataField',
            Label: 'Liters',
            Value: Liters,
        },

        {
            $Type: 'UI.DataField',
            Label: 'Total Cost',
            Value: TotalCost,
        },

        {
            $Type: 'UI.DataField',
            Label: 'Current Odometer',
            Value: currentOdometer,
        }

    ]
);

annotate service.Vehicles with {
    Image @UI.IsImageURL;

};



annotate service.ServiceRecords with @(
    UI.DataPoint #CostKPI : {
        Value : cost,
        Title : 'Total Service Cost'
    }
);