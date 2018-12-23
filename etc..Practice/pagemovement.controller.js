sap.ui.define([
	   "sap/ui/core/mvc/Controller",
	   "sap/m/MessageToast",
	   "sap/ui/model/json/JSONModel",
	   "sap/ui/model/resource/ResourceModel"
	], function (Controller, MessageToast, JSONModel, ResourceModel) {  // 사용할 모델들을 삽입한다.
	   "use strict";
	   return Controller.extend("http://taehyeong.dothome.co.kr/THproject/controller/mainboard", {   // Project ---> Controller ---> name으로 반환한다.

// 상단메뉴바(1): SAP korea로 이동
		onSAPkorea: function(){
			location.href="https://www.sap.com/korea/index.html";
		},
// 상단메뉴바(2): 메인보드 페이지로 이동 
		onHome: function() {
			location.href="http://taehyeong.dothome.co.kr/THproject/WebContent/Mainboard.html";
		},
		
// 상단메뉴바(3): 이전 페이지로 이동 
		onBack: function() {
			history.back();
		}
	   });
	   });