sap.ui.define(["sap/ui/core/UIComponent","sap/ui/model/json/JSONModel"], function (UIComponent, JSONModel) {
    "use strict";

    return UIComponent.extend("ui5.FeedbackForm.Component", {

        metadata: {
            manifest: "json"
        },

        init: function () {

            UIComponent.prototype.init.apply(this, arguments);

            // Create JSON Model
            var oModel = new JSONModel({
                name: "",
                email: "",
                subject: "",
                message: "",
                feedbacks: [],
                count: 0
            });

            // Set the default model
            this.setModel(oModel);

        }

    });
});