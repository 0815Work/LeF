sap.ui.define([
	"LeF/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function (BaseController, JSONModel) {
	"use strict";
	return BaseController.extend("LeF.controller.qCatalog.Question", {
		onGoToAppendixA : function (oEvent) {
			this.getRouter().navTo("appendixA", {}, true);
		},
		onGoToAppendixB : function (oEvent) {
			this.getRouter().navTo("appendixB", {}, true);
		},
		onGoToAppendixC : function (oEvent) {
			this.getRouter().navTo("appendixC", {}, true);
		}
	
	});
});