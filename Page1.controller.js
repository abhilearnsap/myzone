var chart = null;
var me = null;
var data = null;

sap.ui.controller("zabhi_google_bar_chart.Page1", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zabhi_google_bar_chart.Page1
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zabhi_google_bar_chart.Page1
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zabhi_google_bar_chart.Page1
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zabhi_google_bar_chart.Page1
*/
//	onExit: function() {
//
//	}
	  drawChart: function() {
		   data = google.visualization.arrayToDataTable([
		                                                 ['Element', 'Density', { role: 'style' }, { role: 'annotation' } ],
		                                                 ['Copper', 8.94, '#b87333', 'Cu' ],
		                                                 ['Silver', 10.49, 'silver', 'Ag' ],
		                                                 ['Gold', 19.30, 'gold', 'Au' ],
		                                                 ['Platinum', 21.45, 'color: #e5e4e2', 'Pt' ]
		                                                     ]);
		  	   
		      var options = {
		    	        title: "Density of Precious Metals, in g/cm^3",
		    	        width: 600,
		    	        height: 400,
		    	        bar: {groupWidth: "95%"},
		    	        legend: { position: "none" },
		    	      };
		   
		   	chart = new google.visualization.ColumnChart(document.getElementById("bar_chart"));
		    chart.draw(data, options);
		  },
		});
