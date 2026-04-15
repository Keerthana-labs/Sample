sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/JourneyRunner"
], function (opaTest, runner) {
    "use strict";

    function journey() {
        QUnit.module("First journey");

        opaTest("Start application", function (Given, When, Then) {
            Given.iStartMyApp();

            Then.onTheVehicleList.iSeeThisPage();
            Then.onTheVehicleList.onTable().iCheckColumns(5, {"Vehicleid":{"header":"Vehicleid"},"Modelname":{"header":"Modelname"},"Price":{"header":"Price"},"Status":{"header":"Status"},"dealers_Dealerid":{"header":"dealers_Dealerid"}});

        });


        opaTest("Navigate to ObjectPage", function (Given, When, Then) {
            // Note: this test will fail if the ListReport page doesn't show any data
            
            When.onTheVehicleList.onFilterBar().iExecuteSearch();
            
            Then.onTheVehicleList.onTable().iCheckRows();

            When.onTheVehicleList.onTable().iPressRow(0);
            Then.onTheVehicleObjectPage.iSeeThisPage();

        });

        opaTest("Teardown", function (Given, When, Then) { 
            // Cleanup
            Given.iTearDownMyApp();
        });
    }

    runner.run([journey]);
});