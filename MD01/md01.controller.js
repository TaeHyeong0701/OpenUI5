sap.ui.define([
	   "sap/ui/core/mvc/Controller",
	   "sap/m/MessageToast",
	   "sap/ui/model/json/JSONModel",
	   "sap/ui/model/resource/ResourceModel"
	], function (Controller, MessageToast, JSONModel, ResourceModel) {  // 사용할 모델들을 삽입한다.
	   "use strict";
	   return Controller.extend("THproject.controller.md01", {   // Project ---> Controller ---> name으로 반환한다.

//		     onInit : function () {
//		         // set data model on view
//		    	 oSplitApp.attachMasterButton(function(event) {
//		    		    if (event.getParameter("show")) { 
//		    		        let button = this.byId(this.createId("mySplitApp-MasterBtn"));
//		    		        if (button) {
//		    		            button.setIcon("sap-icon://filter");
//		    		        }
//		    		    }
//		    		}, this);
//		      }
		   onSysenter : function()
		   {
			   alert("이것은 Enter Button 입니다. ");
		   }


//	      onShowHello : function () {    // read msg from i18n model
//	          var oBundle = this.getView().getModel("i18n").getResourceBundle(); // 모델을 가져와서 화면으로 던져준다.
//	          var sRecipient = this.getView().getModel().getProperty("/recipient/name");  // 모델에서 getProperty로 데이터를 꺼낸다.
//	          var sMsg = oBundle.getText("helloMsg", [sRecipient]);  // helloMsg를 getText해서 텍스트 값을 꺼낸다. 배열에 값을 꺼낸다.
//	          // show message
//	          MessageToast.show(sMsg);
//	         MessageToast.show("Hello World");
//	      }
	   });
	});