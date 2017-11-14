sap.ui.define([
	"LeF/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function (BaseController, JSONModel) {
	"use strict";
	var _aValidTabKeys = ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q9"];
	return BaseController.extend("LeF.controller.qCatalog.Questions", {
		onInit : function () {
			var oModel = new JSONModel();
			var oRouter = this.getRouter();
			var sCurrentLangu = sap.ui.getCore().getConfiguration().getLanguage();
			this.getView().setModel(new JSONModel(), "view");
			
			if (sCurrentLangu === "de-DE") {
				oModel = new JSONModel(jQuery.sap.getModulePath("LeF.model", "/questionCatalog_de.json"));
			} else {
				if (sCurrentLangu === "fr-FR") {
					oModel = new JSONModel(jQuery.sap.getModulePath("LeF.model", "/questionCatalog_fr.json"));
				} else {
					oModel = new JSONModel(jQuery.sap.getModulePath("LeF.model", "/questionCatalog.json"));
				}
			}
			this.getView().setModel(oModel);
			
			oRouter.getRoute("questions").attachMatched(this._onRouteMatched, this);
		},
		_onRouteMatched : function (oEvent) {
			var oArgs, oView, oQuery;
			oArgs = oEvent.getParameter("arguments");
			oView = this.getView();
			//oView.bindElement("/qCatalog");
			oQuery = oArgs["?qnumber"];
			if (oQuery && _aValidTabKeys.indexOf(oQuery.tab) > -1) {
				oView.getModel("view").setProperty("/selectedTabKey", oQuery.tab);
				this.getOwnerComponent().getModel("stab").setProperty("/selectedTabKey", oQuery.tab);                        
				this.getRouter().getTargets().display(oQuery.tab);
			} else {
				// the default query param should be visible at all time
				this.getRouter().navTo("questions", {
					qnumber: {
						tab: _aValidTabKeys[0]
					}	
				}, true /*no history*/);
			}
		},
		
		onTabSelect : function (oEvent) {
			this.getRouter().navTo("questions", {
				qnumber: {
					tab: oEvent.getParameter("selectedKey")
				}	
			}, true /*no history*/);
		},
		
		onGoToQuestion : function (oEvent) {
			this.getRouter().navTo("startPage");
		},
		
		onNextPoint : function (oEvent) {
			var pos, length, oTab;
			oTab = this.getView().getModel("view").getProperty("/selectedTabKey");
			length = _aValidTabKeys.length;
			pos = _aValidTabKeys.indexOf(oTab) + 1;
			if (pos <= length) {
				this.getRouter().navTo("questions", {
					qnumber: {
						tab: _aValidTabKeys[pos]
					}
				});
			} else {
				this.getRouter().navTo("questions", {
					qnumber: {
						tab: _aValidTabKeys[0]
					}
				});
			}
			
		}
	});
});