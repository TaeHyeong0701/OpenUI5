sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("THproject.controller.carousel", {
		
     onInit: function() {
//    	 ���� ����(�������� ����ϰ�, 100%���ΰ��� �����ϰڴ�.
		var oCarousel = new sap.ui.commons.Carousel("horizontal");
		                
//		          1��  ������ �߰�.
		  oCarousel.addContent(new sap.ui.commons.Image("IMG1",{
			  position : "relative",
			  src:"/img/image1.PNG",
			  alt: "sample",
			  width: "200px",
			  height: "150px",
		      top : "500",
		      left : "500"
		  }));
		  
//		  2�� ������ �߰�
		  oCarousel.addContent(new sap.ui.commons.Image("IMG2",{
			  position : "relative",
			  src:"/img/image2.PNG",
			  alt: "sample",
			  width: "200px",
			  height: "150px",
			      top : "500",
			      left : "500"
		  }));
		  
		  oCarousel.placeAt("content");
     }
		
	});
});