sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
    "sap/m/BusyDialog"
], function (Controller, MessageToast, MessageBox, BusyDialog) {

    "use strict";

    return Controller.extend("ui5.feedbackform.controller.App", {

        onSubmit: function () {

            var oModel = this.getView().getModel();

            var name = this.byId("nameInput").getValue().trim();
            var email = this.byId("emailInput").getValue().trim();
            var subject = this.byId("subjectInput").getValue().trim();
            var message = this.byId("messageArea").getValue().trim();
            var sLanguage = this.byId("languageSelect").getSelectedKey();

            var missingFields = [];

            if (!name) {
                missingFields.push("Name");
            }

            if (!email) {
                missingFields.push("Email");
            }

            if (!subject) {
                missingFields.push("Subject");
            }

            if (!message) {
                missingFields.push("Message");
            }

            if (missingFields.length > 0) {

                MessageBox.error(
                    "Missing fields: " + missingFields.join(", ")
                );

                return;
            }

            var oBusyDialog = new BusyDialog({
                text: "Submitting feedback..."
            });

            // Language changer
            var englishRegex = /^[A-Za-z0-9\s.,@'-]+$/;
            var germanRegex = /^[A-Za-zÄÖÜäöüß0-9\s.,@'-]+$/;
            var tamilRegex = /^[\u0B80-\u0BFF0-9\s.,@'-]+$/;



            // Validate English
            if (sLanguage === "en") {

    if (!englishRegex.test(name) ||
        !englishRegex.test(subject) ||
        !englishRegex.test(message)) {

        MessageBox.error(
            "Please enter all details in English."
        );

        return;
    }

};
        // Validate German
        if (sLanguage === "de") {

    if (!germanRegex.test(name) ||
        !germanRegex.test(subject) ||
        !germanRegex.test(message)) {

        MessageBox.error(
            "Bitte geben Sie alle Daten auf Deutsch ein."
        );

        return;
    }

};

// Validate tamil

if (sLanguage === "ta") {

    if (!tamilRegex.test(name) ||
        !tamilRegex.test(subject) ||
        !tamilRegex.test(message)) {

        MessageBox.error(
            "தயவுசெய்து அனைத்து விவரங்களையும் தமிழில் உள்ளிடவும்."
        );

        return;
    }

}

            oBusyDialog.open();

            setTimeout(function () {

                oBusyDialog.close();

                var aFeedbacks = oModel.getProperty("/feedbacks");

                aFeedbacks.push({
                    name: name,
                    email: email,
                    subject: subject,
                    message: message
                });

                oModel.setProperty("/feedbacks", aFeedbacks);
                oModel.setProperty("/count", aFeedbacks.length);

                MessageToast.show("Feedback submitted successfully");

                oModel.setProperty("/name", "");
                oModel.setProperty("/email", "");
                oModel.setProperty("/subject", "");
                oModel.setProperty("/message", "");

            }, 2000);

        },

        onCancel: function () {

            MessageBox.confirm(
                "Are you sure you want to clear the form?",
                {
                    title: "Confirmation",

                    onClose: function (oAction) {

                        if (oAction === MessageBox.Action.OK) {

                            var oModel = this.getView().getModel();

                            oModel.setProperty("/name", "");
                            oModel.setProperty("/email", "");
                            oModel.setProperty("/subject", "");
                            oModel.setProperty("/message", "");

                            MessageToast.show("Form cleared");
                        }

                    }.bind(this)
                }
            );

        },

        // Language changer

      onLanguageChange: function (oEvent) {

    var sLanguage = oEvent.getSource().getSelectedKey();

    sap.ui.getCore().getConfiguration().setLanguage(sLanguage);

    sap.ui.getCore().applyChanges();

}

    });

});