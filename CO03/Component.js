sap.ui.define([
	   "sap/ui/core/UIComponent",
	   "sap/ui/model/json/JSONModel"
	], function (UIComponent, JSONModel, ResourceModel) {
	   "use strict";
	   return UIComponent.extend("THproject.Component", {  //UI Component를 사용하겠다.
	      metadata : {
	    	  manifest : "json"   // JSON 호출
	      } 
	   });
	});
