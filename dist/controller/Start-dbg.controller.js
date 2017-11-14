sap.ui.define([
	"LeF/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function (BaseController, JSONModel) {
	"use strict";
	
	return BaseController.extend("LeF.controller.Start", {
		onInit : function () {
			var oImgModel = new JSONModel(jQuery.sap.getModulePath("LeF.model", "/images.json"));
			this.getView().setModel(oImgModel, "img");
		},
		onGoToSearch : function (oEvent) {
			this.getRouter().navTo("search");
		}
	});
});