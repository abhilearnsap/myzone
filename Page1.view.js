sap.ui.jsview("zabhi_google_bar_chart.Page1", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zabhi_google_bar_chart.Page1
	*/ 
	getControllerName : function() {
		return "zabhi_google_bar_chart.Page1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zabhi_google_bar_chart.Page1
	*/ 
	createContent : function(oController) {
		  var content = [];
		  var html1 = new sap.ui.core.HTML("html1", {
		              content:
		                      "<div id=\"bar_chart\" style=\"width: 900px; height: 500px;\"></div>",
		              preferDOM : false,                   
		              afterRendering : function(e) {
		              google.setOnLoadCallback( oController.drawChart() );
		              }
		      });
		  var oPanel = new sap.ui.commons.Panel();
		  oPanel.setTitle(new sap.ui.core.Title({text: "Google Chart"}));
		  oPanel.addContent(html1);
		  content.push(oPanel);
		  return content;
		  }
		});
