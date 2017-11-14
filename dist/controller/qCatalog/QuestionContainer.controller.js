sap.ui.define([
	"LeF/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function (BaseController, JSONModel) {
		"use strict";
		return BaseController.extend("LeF.controller.qCatalog.QuestionContainer", {
			
			onInit: function () {
				this.getRouter().navTo("questions", {
					qnumber: {
						tab: "Q1"
					}	
				}, true /*no history*/);
			}
		});
});