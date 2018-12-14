sap.ui.define([
	   "sap/ui/core/mvc/Controller",
	   "sap/m/MessageToast",
	   "sap/ui/model/json/JSONModel",
	   "sap/ui/model/resource/ResourceModel"
	], function (Controller, MessageToast, JSONModel, ResourceModel) {  // 사용할 모델들을 삽입한다.
	   "use strict";
	   return Controller.extend("THproject.controller.md01", {   // Project ---> Controller ---> name으로 반환한다.

		   onSysenter : function()
		   {
			   alert("이것은 Enter Button 입니다. ");
		   }

	   });
	});