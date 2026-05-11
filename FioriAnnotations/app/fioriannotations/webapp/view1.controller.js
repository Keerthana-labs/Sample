sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageBox"
], function (Controller, MessageBox) {
  "use strict";

  return Controller.extend("my.app.controller.Main", {

    onDeletePress: function () {
      MessageBox.confirm("Do you want to delete this item?", {
        actions: ["Delete", "Cancel"],
        onClose: function (action) {
          if (action === "Delete") {
            MessageBox.success("Item deleted successfully");
          }
        }
      });
    }

  });
});