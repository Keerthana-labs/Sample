alert("Live UI5 server is ready");

//step3 
sap.ui.define([
  "sap/ui/core/mvc/XMLView"
], function (XMLView) {
  "use strict";

  XMLView.create({
    viewName: "ui5.walkthro.view.App",
    id: "app"
  }).then(function (view) {
    view.placeAt("content");
  });
});
