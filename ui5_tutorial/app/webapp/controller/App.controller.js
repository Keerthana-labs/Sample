/* sap.ui.define(["sap/m/MessageToast","sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel","sap/ui/model/resource/ResourceModel"], function (MessageToast, Controller, JSONModel, ResourceModel) {
	"use strict"; */

	/* const AppController = Controller.extend("ui5.tutorial.walkthrough.controller.App", {
		onShowHello() {
			// show a native JavaScript alert
			alert("App.controller.js is working fine");
		},
 */
            // step 7 -JSON Model
           /*  onInit(){
                const data = {
                    recipient:{
                        name:"Keerthana"
                    }
                };
                const dataModel = new JSONModel(data);
                this.getView()?.setModel(dataModel); */

            // step 8 - Translatable Texts(set i18n model on view)

              /*  const i18nModel = new ResourceModel({
                bundleName:"ui5.tutorial.walkthrough.i18n.i18n"
               });
               this.getView()?.setModel(i18nModel,"i18n");
            },  */
 

            // step 6 - Modules - MessageToast
        /* onShowHello(){
            MessageToast.show("Modules - MessageToast is working fine") 
        }, */

      /*  onShowHello() {
			// read msg from i18n model
            // functions with generic return values require casting
			const recipient = this.getView()?.getModel()?.getProperty("/recipient/name");
			const resourceBundle = this.getView()?.getModel("i18n")?.getResourceBundle();
			const msg = resourceBundle.getText("helloMsg", [recipient]);
			// show message
			MessageToast.show(msg);
		},
            
	});
	;
	return AppController;

    

    
}); */

sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";

	const App = Controller.extend("ui5.tutorial.walkthrough.controller.App", {});
	;
	return App;
});