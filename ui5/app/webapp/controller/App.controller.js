sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  const AppController = Controller.extend("ui5.walkthrough.controller.App", {
    onShowHello() {
      // show a native JavaScript alert
      alert("Hello I'm Keerthana from Ladera Technology");
    }
  });
  ;
  return AppController;
});