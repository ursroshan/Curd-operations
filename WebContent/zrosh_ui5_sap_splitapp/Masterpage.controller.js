sap.ui.controller("zrosh_ui5_sap_splitapp.Masterpage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zrosh_ui5_sap_splitapp.Masterpage
*/
	onInit: function() {
		var url = "proxy/http/122.180.87.238:8000/sap/opu/odata/SAP/ZGW_CLS01_PRODUCT_SRV/";
		var oModel = new sap.ui.model.odata.v2.ODataModel(url);
		 
		   this.getView().setModel(oModel);
	},

	onPress : function(oEvent){
		
		var v1 = oEvent.getSource().getTitle()
		var osp = this.getView().getParent().getParent()
		
		var oEventBus = sap.ui.getCore().getEventBus();
		oEventBus.publish("buschannel","eventId",{ProductID :v1});
		
		osp.toDetail("idSplitcombo1--id2");
		
	},
	Change : function(event){
		var query = event.getSource().getValue();
		
		var filters = [];
		/*if(query && query.length>0){*/
			var filter1 = new sap.ui.model.Filter(
					"ProductID",
					sap.ui.model.FilterOperator.EQ,query);
			filters.push(filter1);
		var oTable = this.getView().byId("idlist");
		oTable.getBinding("items").filter(filters)
		/*binding.filter1(Filters, "Application");*/
		
	}
	
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zrosh_ui5_sap_splitapp.Masterpage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zrosh_ui5_sap_splitapp.Masterpage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zrosh_ui5_sap_splitapp.Masterpage
*/
//	onExit: function() {
//
//	}

});