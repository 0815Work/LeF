sap.ui.define([
	"LeF/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function (BaseController, JSONModel) {
	"use strict";
	return BaseController.extend("LeF.controller.BaseData", {
		
		onInit : function () {
			var oModel = new JSONModel(jQuery.sap.getModulePath("LeF.model", "/period.json"));
			this.getView().setModel(oModel);
			oModel.setData({
				dateValue: new Date()
			});
			this.getView().setModel(oModel);
		},
		
		handleChange: function (oEvent) {
			//var sValue = oEvent.getParameter("value");
			var bValid = oEvent.getParameter("valid");
			//this.byId("dpDate").setDateValue(sValue);
			if (bValid) {
				this.byId("dpDate").setValueState(sap.ui.core.ValueState.None);
			} else {
				this.byId("dpDate").setValueState(sap.ui.core.ValueState.Error);
			}
		},
		
		onGoToQuestion : function (oEvent) {
			//this.getRouter().navTo("questions");
			this.getRouter().navTo("questionContainer");
		}
	});
});