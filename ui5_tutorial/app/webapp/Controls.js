
//-------------types of controls--------------- 
/* sap.ui.define([
    "sap/m/VBox",
    "sap/m/Title",
    "sap/m/Label",
    "sap/m/Input",
	"sap/m/RadioButton",
	"sap/m/TextArea",
	"sap/m/Button",
	"sap/m/MessageToast",
	"sap/m/Image",
    "sap/m/Table",
"sap/m/Column",
"sap/m/ColumnListItem",
"sap/m/Text"
], function (VBox, Title, Label, Input, RadioButton, TextArea, Button,MessageToast, Image, Table, Column, ColumnListItem, Text) {
    "use strict";
 
    new VBox({
        width: "300px",
        items: [
  */
            // Title
           /*  new Title({
                text: "Employee Registration",
                level: "H2"
            }), */
 
            // Name
           /*  new Label({
                text: "Name",
                labelFor: "nameInput"
            }),
            new Input("nameInput", {
                placeholder: "Enter your name"
            }), */
 
            // Email
          /*   new Label({
                text: "Email",
                labelFor: "emailInput"
            }),
            new Input("emailInput", {
                placeholder: "Enter your email"
            }), */
 
            // Phone Number
           /*  new Label({
                text: "Phone Number",
                labelFor: "phoneInput"
            }),
            new Input("phoneInput", {
                placeholder: "Enter your phone number"
            }), */

			// RADIO BUTTON - GENDER
	/* 		new Label({
    text: "Gender"
}),

new RadioButton({
    text: "Male",
    groupName: "gender"
}),

new RadioButton({
    text: "Female",
    groupName: "gender"
}), */

// -------------TEXT AREA - ADDRESS ---------------
/* new Label({
    text: "Address",
    labelFor: "addressInput"
}),

new TextArea("addressInput", {
    placeholder: "Enter your address",
    rows: 4,
    width: "100%"
}), */


// -------------BUTTON - SUBMIT -------------
/* new Button({
    text: "Submit",
    type: "Emphasized",
    press: function () {
		// alert("form submitted successfully");
        MessageToast.show("Form Submitted Successfully!");
    }
}), */

// IMAGE - EMPLOYEE
// new Image({
//     src: "data:image/jpeg;base64,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",
//     width: "120px",
//     height: "120px"
// }),

//--------------TABLE - EMPLOYEE DETAILS---------------------
// new Table({
//     headerText: "Employee Details",
//     columns: [
//         new Column({
//             header: new Text({ text: "Name" })
//         }),
//         new Column({
//             header: new Text({ text: "Email" })
//         }),
//         new Column({
//             header: new Text({ text: "Phone Number" })
//         })
//     ],
//     items: [
//         new ColumnListItem({
//             cells: [
//                 new Text({ text: "Keerthana" }),
//                 new Text({ text: "keerthana@gmail.com" }),
//                 new Text({ text: "9876543210" })
//             ]
//         }),
//         new ColumnListItem({
//             cells: [
//                 new Text({ text: "Chitra" }),
//                 new Text({ text: "chitra@gmail.com" }),
//                 new Text({ text: "9123456789" })
//             ]
//         })
//     ]
// })

 
//         ]
//     }).placeAt("content");

    
	
// }); 