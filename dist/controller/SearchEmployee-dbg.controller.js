sap.ui.define([
	"LeF/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/Sorter"
], function (BaseController, JSONModel, Filter, FilterOperator, Sorter) {
	"use strict";
	return BaseController.extend("LeF.controller.SearchEmployee", {
		
		onInit: function () {
			var oRouter = this.getRouter();
			this._oDataModel = this.getOwnerComponent().getModel("ZTEST_SRV");
			this._oEmployees = this.getOwnerComponent().getModel("employee");
			this._oTable = this.getView().byId("employeeTable");
			this._oVSD = null;
			this._sSortField = null;
			this._bSortDescending = false;
			this._aValidSortFields = ["FirstName", "LastName"];
			this._sSearchQuery = null;
			this._oRouterArgs = null;
		//	this._initViewSettingsDialog();
			oRouter.getRoute("search").attachMatched(this._onRouteMatched, this);
		},
		_onRouteMatched : function (oEvent) {
			this._oRouterArgs = oEvent.getParameter("arguments");
			this._oRouterArgs.query = this._oRouterArgs["?query"] || {};
			if (this._oRouterArgs.query) {
				this._applySearchFilter(this._oRouterArgs.query.search);
				//this._applySorter(this._oRouterArgs.query.sortField, this._oRouterArgs.query.sortDescending);
				if (this._oRouterArgs.query.showDialog) {
					this._oVSD.open();
				}
			}
		},
		
		onSearchEmployeeTable : function (oEvent) {
			var oRouter = this.getRouter();
			this._oRouterArgs.query.search = oEvent.getSource().getValue();
			var test = encodeURI(this._oRouterArgs.query.search);
			this.getOwnerComponent().getModel("ZTEST_SRV").read("/SearchEmployeeSet?search="+encodeURI(this._oRouterArgs.query.search), {
				success: function(oData, response) {
					//var oModel = this.getOwnerComponent().getModel("employee");
					var aEmployee = oData.results;
					this._oEmployees.setProperty("/", oData.results);
					//this.getOwnerComponent().getModel('employee').setProperty("/", oData.results);
				},
				error: function(oError) {}
			});
			oRouter.navTo("search", this._oRouterArgs, true);
		},
		
		_applySearchFilter : function (sSearchQuery) {
			var aFilters, oFilter, oBinding;
			if (this._sSearchQuery === sSearchQuery) {
				return;
			}
			this._sSearchQuery = sSearchQuery;
			this.byId("searchField").setValue(sSearchQuery);
			aFilters = [];
			if (sSearchQuery && sSearchQuery.length > 0) {
				aFilters.push(new Filter("FirstName", FilterOperator.Contains, sSearchQuery));
				aFilters.push(new Filter("LastName", FilterOperator.Contains, sSearchQuery));
			} else {
				oFilter = null;
			}
			oBinding = this._oTable.getBinding("items");
			//oBinding.filter(oFilter, "Application");
		},
		
		onGoToBaseData : function (oEvent) {
			this.getRouter().navTo("data");
		}
	});
});