/* // alert("UI5 is ready");

//step 3 (controls)
 sap.ui.define(["sap/m/Text"], function (Text) {
	"use strict";

	new Text({
		text: "Controls of UI5 are working fine"
	}).placeAt("content");
});

//step 4 (XML Views)
sap.ui.define(["sap/ui/core/mvc/XMLView"], function (XMLView) {
	"use strict";

	XMLView.create({
		viewName: "ui5.tutorial.walkthrough.view.App",
		id: "app"
	}).then(function (view) { 
		view.placeAt("content");
	}); 
}); 

// step 9 (Component configuration)
sap.ui.define(["sap/ui/core/ComponentContainer"], function (ComponentContainer) {
  "use strict";

  new ComponentContainer({
	id: "container",
	name: "ui5.tutorial.walkthrough",
	settings: {
	  id: "walkthrough"
	},
	autoPrefixId: true,
	async: true
  }).placeAt("content");
});

 */