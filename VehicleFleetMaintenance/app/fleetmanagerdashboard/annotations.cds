using service.fleet.MaintenanceService as service from '../../srv/fleet';
annotate service.Vehicles with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'RegNumber',
                Value : RegNumber,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Make',
                Value : Make,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Model',
                Value : Model,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Year',
                Value : Year,
            },
            {
                $Type : 'UI.DataField',
                Label : 'FuelType',
                Value : FuelType,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Status',
                Value : Status,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Odometer',
                Value : Odometer,
            },
            {
                $Type : 'UI.DataField',
                Label : 'NextServiceDue',
                Value : NextServiceDue,
            },
            {
                $Type : 'UI.DataField',
                Label : 'criticality',
                Value : criticality,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Image',
                Value : Image,
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

    UI.HeaderInfo                : {
        TypeName   : 'Vehicles',
        Title      : {Value: Model},
        Description: {Value: RegNumber},
        ImageUrl:Image 

    },

    UI.SelectionFields           :[
        Status
        // MaintenanceAlerts.VehicleNumber,
        // MaintenanceAlerts.AlertStatus

    ],
    UI.DataPoint #FleetCost : {
        Value : totalCost,
        Title : 'Fleet Cost Analysis',
       
    },
    UI.HeaderFacets : [
        {
            $Type : 'UI.ReferenceFacet',
            Target : '@UI.DataPoint#FleetCost',
        }
    ],


    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'RegNumber',
            Value : RegNumber,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Make',
            Value : Make,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Model',
            Value : Model,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Year',
            Value : Year,
        },
        {
            $Type : 'UI.DataField',
            Label : 'FuelType',
            Value : FuelType,
        },
       /*  {
            $Type : 'UI.DataField',
            Label : 'Vehicle Number',
            Value : MaintenanceAlerts.VehicleNumber,
        },
         {
            $Type : 'UI.DataField',
            Label : 'AlertType',
            Value : MaintenanceAlerts.AlertType,
        },
         {
            $Type : 'UI.DataField',
            Label : 'DueDate',
            Value : MaintenanceAlerts.DueDate,
        },
         {
            $Type : 'UI.DataField',
            Label : 'AlertStatus',
            Value : MaintenanceAlerts.AlertStatus,
        }, */
       {
            $Type : 'UI.DataFieldForAction',
            Action : 'service.fleet.MaintenanceService.EntityContainer/logService',
            Label  : 'Log Service'
        }
    ], 
);


annotate service.Vehicles with {
    Model @Common.Label : 'Model'
};

annotate service.FuelLogs with {
    FuelEfficiency @Common.Label : 'Fuel Efficiency'
};
