sap.ui.controller("zrosh_ui5_sap_splitapp.Detailpage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zrosh_ui5_sap_splitapp.Detailpage
*/
	onInit: function() {
		
		 
		   
		var obj = this.getView().byId("sf");
		var that = this;
		
		   var oEventBus = sap.ui.getCore().getEventBus();
			oEventBus.subscribe("buschannel","eventId",function(channelId,eventId,data){
				//debugger;
				var pid = data.ProductID;
				//bind it to detailspage
				//take the reference of object Handler
				
				var obj = that.getView().byId("sf");
				
				var url = "proxy/http/122.180.87.238:8000/sap/opu/odata/SAP/ZGW_CLS01_PRODUCT_SRV/";
				var oModel = new sap.ui.model.odata.v2.ODataModel(url);
				 that.getView().setModel(oModel);
				
				 obj.bindElement("/ProductSet('"+pid+"')");
			})
			
	},
	
	onCretae : function () {
		var url = "proxy/http/122.180.87.238:8000/sap/opu/odata/SAP/ZGW_CLS01_PRODUCT_SRV/";
		var oModel = new sap.ui.model.odata.v2.ODataModel(url);
		this.getView().setModel(oModel);
		var omodel = this.getView().getModel();
		var there = this;
		var dialog = new sap.m.Dialog({
			title: 'Confirm',
			type: 'Message',
			content: [  new sap.m.Label({text : "ProductID"}),
			            new sap.m.Input({
			            				 id   :	"cid"}),
			            new sap.m.Label({text : "Name"}),
			            new sap.m.Input({ 
			            					id : "nid"})
					  ],
			beginButton: new sap.m.Button({
				text  : 'Save',
				press : function(){
					var omodel = there.getView().getModel();
					//create(sPath, oData, mParameters?)
					
					var data = {
					   ProductID : sap.ui.getCore().byId("cid").getValue(),
					  Name : sap.ui.getCore().byId("nid").getValue()
					}
				            	
					omodel.create("/ProductSet", data,
							{
						success:function(){
							sap.m.MessageToast.show("data created")
						                  },
						error:function(){
							sap.m.MessageToast.show("data not created")
						                }
							}
					)
				}
			}),
			endButton: new sap.m.Button({
				text: 'Cancel',
				press: function () {
					dialog.close();
				}
			}),
			afterClose: function() {
				dialog.destroy();
			}
		});

		dialog.open();
	},
	
onUpdate : function () {
		var url = "proxy/http/122.180.87.238:8000/sap/opu/odata/SAP/ZGW_CLS01_PRODUCT_SRV/";
		var oModel = new sap.ui.model.odata.v2.ODataModel(url);
		this.getView().setModel(oModel);
		var omodel = this.getView().getModel();
		var there = this;
		var dialog = new sap.m.Dialog({
			title: 'Confirm',
			type: 'Message',
			content: [  new sap.m.Label({text : "ProductID"}),
			            new sap.m.Input({
			            				 id   :	"cid"}),
			            new sap.m.Label({text : "Name"}),
			            new sap.m.Input({ 
			            					id : "nid"})
					  ],
			beginButton: new sap.m.Button({
				text  : 'Update',
				press : function(){
					var omodel = there.getView().getModel();
					//create(sPath, oData, mParameters?)
					 var ProductID = sap.ui.getCore().byId("cid").getValue()
					var data = {
					   
					  Name : sap.ui.getCore().byId("nid").getValue()
					}
				            	
					omodel.update("/ProductSet('"+ProductID+"')", data,
							{
						success:function(){
							sap.m.MessageToast.show("data Updated")
						                  },
						error:function(){
							sap.m.MessageToast.show("data not Updated")
						                }
							}
					)
				}
			}),
			endButton: new sap.m.Button({
				text: 'Cancel',
				press: function () {
					dialog.close();
				}
			}),
			afterClose: function() {
				dialog.destroy();
			}
		});

		dialog.open();
	},
	
	onDelete : function () {
		var url = "proxy/http/122.180.87.238:8000/sap/opu/odata/SAP/ZGW_CLS01_PRODUCT_SRV/";
		var oModel = new sap.ui.model.odata.v2.ODataModel(url);
		this.getView().setModel(oModel);
		var omodel = this.getView().getModel();
		var there = this;
		var dialog = new sap.m.Dialog({
			title: 'Confirm',
			type: 'Message',
			content: [  new sap.m.Label({text : "ProductID"}),
			            new sap.m.Input({
			            				 id   :	"cid"}),
			            new sap.m.Label({text : "Name"}),
			            new sap.m.Input({ 
			            					id : "nid"})
					  ],
			beginButton: new sap.m.Button({
				text  : 'Delete',
				press : function(){
					var omodel = there.getView().getModel();
					//create(sPath, oData, mParameters?)
					 var ProductID = sap.ui.getCore().byId("cid").getValue()
					/*var data = {
					   
					  Name : sap.ui.getCore().byId("nid").getValue()
					}*/
				            	
					omodel.remove("/ProductSet('"+ProductID+"')",
							{
						success:function(){
							sap.m.MessageToast.show("data Deleted")
						                  },
						error:function(){
							sap.m.MessageToast.show("data not Deleted")
						                }
							}
					)
				}
			}),
			endButton: new sap.m.Button({
				text: 'Cancel',
				press: function () {
					dialog.close();
				}
			}),
			afterClose: function() {
				dialog.destroy();
			}
		});

		dialog.open();
	},
		  
	

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zrosh_ui5_sap_splitapp.Detailpage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zrosh_ui5_sap_splitapp.Detailpage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zrosh_ui5_sap_splitapp.Detailpage
*/
//	onExit: function() {
//
//	}

});