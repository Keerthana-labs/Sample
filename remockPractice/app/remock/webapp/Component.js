sap.ui.define(
    ["sap/fe/core/AppComponent"],
    function (Component) {
        "use strict";

        return Component.extend("remock.Component", {
            metadata: {
                manifest: "json"
            }
        });
    }
);