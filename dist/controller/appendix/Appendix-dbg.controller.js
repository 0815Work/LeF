sap.ui.define([
	"LeF/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function (BaseController, JSONModel) {
		"use strict";
		return BaseController.extend("LeF.controller.appendix.Appendix", {
			onInit : function () {
				var oBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
				var oModel = new JSONModel({
					HTML : "<p><h3><u>" + oBundle.getText("ABValue1Title") + "</u></h3><br>" +
						   "<h4>" + oBundle.getText("ABValue1Desc") + "</h4>" +
						   "<ul><li>" + oBundle.getText("ABValue1.point1") + "</li>" +
							   "<li>" + oBundle.getText("ABValue1.point2") + "</li>" +
							   "<li>" + oBundle.getText("ABValue1.point3") + "</li>" +
							   "<li>" + oBundle.getText("ABValue1.point4") + "</li></ul></p><br>" +
							 
						   "<p><h3><u>" + oBundle.getText("ABValue2Title") + "</u></h3><br>" +
						   "<h4>" + oBundle.getText("ABValue2Desc") + "</h4>" +
						   "<ul><li>" + oBundle.getText("ABValue2.point1") + "</li>" +
							   "<li>" + oBundle.getText("ABValue2.point2") + "</li>" +
							   "<li>" + oBundle.getText("ABValue2.point3") + "</li>" +
							   "<li>" + oBundle.getText("ABValue2.point4") + "</li></ul></p><br>" +
							   
						   "<p><h3><u>" + oBundle.getText("ABValue3Title") + "</u></h3><br>" +
						   "<h4>" + oBundle.getText("ABValue3Desc") + "</h4>" +
						   "<ul><li>" + oBundle.getText("ABValue3.point1") + "</li>" +
							   "<li>" + oBundle.getText("ABValue3.point2") + "</li>" +
							   "<li>" + oBundle.getText("ABValue3.point3") + "</li>" +
							   "<li>" + oBundle.getText("ABValue3.point4") + "</li></ul></p><br>" +
							   
						   "<p><h3><u>" + oBundle.getText("ABValue4Title") + "</u></h3><br>" +
						   "<h4>" + oBundle.getText("ABValue4Desc") + "</h4>" +
						   "<ul><li>" + oBundle.getText("ABValue4.point1") + "</li>" +
							   "<li>" + oBundle.getText("ABValue4.point2") + "</li>" +
							   "<li>" + oBundle.getText("ABValue4.point3") + "</li>" +
							   "<li>" + oBundle.getText("ABValue4.point4") + "</li></ul></p><br>" +
							   
						   "<p><h3><u>" + oBundle.getText("ABValue5Title") + "</u></h3><br>" +
						   "<h4>" + oBundle.getText("ABValue5Desc") + "</h4>" +
						   "<ul><li>" + oBundle.getText("ABValue5.point1") + "</li>" +
							   "<li>" + oBundle.getText("ABValue5.point2") + "</li>" +
							   "<li>" + oBundle.getText("ABValue5.point3") + "</li>" +
							   "<li>" + oBundle.getText("ABValue5.point4") + "</li></ul></p><br>" +
							   
						   "<p><h3><u>" + oBundle.getText("ABValue6Title") + "</u></h3><br>" +
						   "<h4>" + oBundle.getText("ABValue6Desc") + "</h4>" +
						   "<ul><li>" + oBundle.getText("ABValue6.point1") + "</li>" +
							   "<li>" + oBundle.getText("ABValue6.point2") + "</li>" +
							   "<li>" + oBundle.getText("ABValue6.point3") + "</li>" +
							   "<li>" + oBundle.getText("ABValue6.point4") + "</li></ul></p>" 
				});
				this.getView().setModel(oModel);
			},
			onNavReturn: function (oEvent) {
				var oModel = this.getOwnerComponent().getModel("stab");
				var oTab = oModel.getProperty("/selectedTabKey");
				this.getRouter().navTo("questions", {
					qnumber: {
						tab: oTab
					}
				},
				true /*no histroy*/);
			}
	});
});