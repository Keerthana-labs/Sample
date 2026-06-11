using service.fleet.MaintenanceService as service from '../../srv/fleet';
annotate service.FuelEfficiencyReport with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'Model',
                Value : Model,
            },
            {
                $Type : 'UI.DataField',
                Label : 'FuelEfficiency',
                Value : FuelEfficiency,
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
            Label : 'Model',
            Value : Model,
        },
        {
            $Type : 'UI.DataField',
            Label : 'FuelEfficiency',
            Value : FuelEfficiency,
        },
    ],
    Analytics.AggregatedProperty #FuelEfficiency_average : {
        $Type : 'Analytics.AggregatedPropertyType',
        Name : 'FuelEfficiency_average',
        AggregatableProperty : FuelEfficiency,
        AggregationMethod : 'average',
        @Common.Label : 'FuelEfficiency (Average)',
    },
    UI.Chart #alpChart : {
        $Type : 'UI.ChartDefinitionType',
        ChartType : #Column,
        Dimensions : [
            Model,
        ],
        DynamicMeasures : [
            '@Analytics.AggregatedProperty#FuelEfficiency_average',
        ],
    },
);

annotate service.FuelEfficiencyReport with @(
    Aggregation.ApplySupported : {

        Transformations : [
            'aggregate',
            'groupby'
        ],

        GroupableProperties : [
            Model
        ],

        AggregatableProperties : [
            {
                Property : FuelEfficiency
            }
        ]
    },
);

