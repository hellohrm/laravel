var Charts = function () {
	"use strict";
	var lineChartHandler = function () {
		var data = {
			labels: ["January", "February", "March", "April", "May", "June", "July"],
			datasets: [{
				label: "My First dataset",
				backgroundColor: "rgba(220,220,220,0.2)",
				borderColor: "rgba(220,220,220,1)",
				pointColor: "rgba(220,220,220,1)",
				pointborderColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(220,220,220,1)",
				data: [65, 59, 80, 81, 56, 55, 40]
			}, {
				label: "My Second dataset",
				backgroundColor: "rgba(151,187,205,0.2)",
				borderColor: "rgba(151,187,205,1)",
				pointColor: "rgba(151,187,205,1)",
				pointborderColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(151,187,205,1)",
				data: [28, 48, 40, 19, 86, 27, 90]
			}]
		};

		var options = {
			maintainAspectRatio: false,
			responsive: true,
			legend: {
				display: false
			},
			legendCallback: function (chart) {
				var legendTemplate = '<ul class="tc-chart-js-legend">';
				for (var i = 0; i < chart.legend.legendItems.length; i++) {
					var legendItem = chart.legend.legendItems[i];
					legendTemplate = legendTemplate + '<li><span style="background-color:' + legendItem.strokeStyle + '"></span>' + legendItem.text + '</li>';
				}
				legendTemplate = legendTemplate + '</ul>';
				return legendTemplate;
			}
		};

		var ctx = document.getElementById("lineChart");
		var myChart = new Chart(ctx, {
			type: 'line',
			data: data,
			options: options
		});
		var legend = myChart.generateLegend();
		$('#lineLegend').append(legend);
	};
	var barChartHandler = function () {		
		var data = {
			labels: ["January", "February", "March", "April", "May", "June", "July"],
			datasets: [{
				label: "My First dataset",
				backgroundColor: "rgba(220,220,220,0.5)",
				borderColor: "rgba(220,220,220,0.8)",
				highlightFill: "rgba(220,220,220,0.75)",
				highlightStroke: "rgba(220,220,220,1)",
				data: [65, 59, 80, 81, 56, 55, 40]
			}, {
				label: "My Second dataset",
				backgroundColor: "rgba(151,187,205,0.5)",
				borderColor: "rgba(151,187,205,0.8)",
				highlightFill: "rgba(151,187,205,0.75)",
				highlightStroke: "rgba(151,187,205,1)",
				data: [28, 48, 40, 19, 86, 27, 90]
			}]
		};

		var options = {
			maintainAspectRatio: false,
			responsive: true,
			legend: {
				display: false
			},
			legendCallback: function (chart) {
				var legendTemplate = '<ul class="tc-chart-js-legend">';
				for (var i = 0; i < chart.legend.legendItems.length; i++) {
					var legendItem = chart.legend.legendItems[i];
					legendTemplate = legendTemplate + '<li><span style="background-color:' + legendItem.strokeStyle + '"></span>' + legendItem.text + '</li>';
				}
				legendTemplate = legendTemplate + '</ul>';
				return legendTemplate;
			}
		};
		var ctx = $("#barChart").get(0).getContext("2d");
		var myChart = new Chart(ctx, {
			type: 'bar',
			data: data,
			options: options
		});
		var legend = myChart.generateLegend();
		//and append it to your page somewhere
		$('#barLegend').append(legend);
	};
	var doughnutChartHandler = function () {
		var data = {
			labels: ["Red", "Green", "Yellow"],
			datasets: [{
				label: "My First Dataset",
				data: [300, 50, 100],
				backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"]
			}]
		};

		var options = {
			maintainAspectRatio: false,
			responsive: true,
			legend: {
				display: false
			},
			legendCallback: function (chart) {
				var legendTemplate = '<ul class="tc-chart-js-legend">';
				for (var i = 0; i < chart.legend.legendItems.length; i++) {
					var legendItem = chart.legend.legendItems[i];
					legendTemplate = legendTemplate + '<li><span style="background-color:' + legendItem.fillStyle + '"></span>' + legendItem.text + '</li>';
				}
				legendTemplate = legendTemplate + '</ul>';
				return legendTemplate;
			}			
		};

		var ctx = $("#doughnutChart").get(0).getContext("2d");
		var myChart = new Chart(ctx, {
			type: 'doughnut',
			data: data,
			options: options
		});
		var legend = myChart.generateLegend();
		//and append it to your page somewhere
		$('#doughnutLegend').append(legend);
	};
	var pieChartHandler = function () {
		// Chart.js Data
		var data = {
			labels: ["Red", "Green", "Yellow"],
			datasets: [{
				label: "My First Dataset",
				data: [300, 50, 100],
				backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"]
			}]
		};

		var options = {
			maintainAspectRatio: false,
			responsive: true,
			legend: {
				display: false
			},
			legendCallback: function (chart) {
				var legendTemplate = '<ul class="tc-chart-js-legend">';
				for (var i = 0; i < chart.legend.legendItems.length; i++) {
					var legendItem = chart.legend.legendItems[i];
					legendTemplate = legendTemplate + '<li><span style="background-color:' + legendItem.fillStyle + '"></span>' + legendItem.text + '</li>';
				}
				legendTemplate = legendTemplate + '</ul>';
				return legendTemplate;
			}			
		};

		var ctx = $("#pieChart").get(0).getContext("2d");
		var myChart = new Chart(ctx, {
			type: 'pie',
			data: data,
			options: options
		});
		var legend = myChart.generateLegend();
		//and append it to your page somewhere
		$('#pieLegend').append(legend);
	};
	
	var radarChartHandler = function () {
		// Chart.js Data
		var data = {
			labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
			datasets: [{
					label: 'My First dataset',
					backgroundColor: 'rgba(220,220,220,0.2)',
					borderColor: 'rgba(220,220,220,1)',
					pointColor: 'rgba(220,220,220,1)',
					pointborderColor: '#fff',
					pointHighlightFill: '#fff',
					pointHighlightStroke: 'rgba(220,220,220,1)',
					data: [65, 59, 90, 81, 56, 55, 40]
				},
				{
					label: 'My Second dataset',
					backgroundColor: 'rgba(151,187,205,0.2)',
					borderColor: 'rgba(151,187,205,1)',
					pointColor: 'rgba(151,187,205,1)',
					pointborderColor: '#fff',
					pointHighlightFill: '#fff',
					pointHighlightStroke: 'rgba(151,187,205,1)',
					data: [28, 48, 40, 19, 96, 27, 100]
				}
			]
		};
		var options = {
			responsive: true,
			legend: {
				display: false
			},
			legendCallback: function (chart) {
				var legendTemplate = '<ul class="tc-chart-js-legend">';
				for (var i = 0; i < chart.legend.legendItems.length; i++) {
					var legendItem = chart.legend.legendItems[i];
					legendTemplate = legendTemplate + '<li><span style="background-color:' + legendItem.fillStyle + '"></span>' + legendItem.text + '</li>';
				}
				legendTemplate = legendTemplate + '</ul>';
				return legendTemplate;
			}			
		};
		var ctx = $("#radarChart").get(0).getContext("2d");
		var myChart = new Chart(ctx, {
			type: 'radar',
			data: data,
			options: options
		});
		var legend = myChart.generateLegend();
		//and append it to your page somewhere
		$('#radarLegend').append(legend);
	};

	return {
		//main function to initiate template pages
		init: function () {
			lineChartHandler();
			barChartHandler();
			doughnutChartHandler();
			pieChartHandler();
			radarChartHandler();
		}
	};
}();