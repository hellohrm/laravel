'use strict';
var Index = function () {
	var chart1Handler = function () {
		var data = {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			datasets: [{
				label: 'My First dataset',
				backgroundColor: 'rgba(220,220,220,0.2)',
				borderColor: 'rgba(220,220,220,1)',
				pointColor: 'rgba(220,220,220,1)',
				pointStrokeColor: '#fff',
				pointHighlightFill: '#fff',
				pointHighlightStroke: 'rgba(220,220,220,1)',
				data: [65, 59, 80, 81, 56, 55, 40, 84, 64, 120, 132, 87]
			}, {
				label: 'My Second dataset',
				backgroundColor: 'rgba(151,187,205,0.2)',
				borderColor: 'rgba(151,187,205,1)',
				pointColor: 'rgba(151,187,205,1)',
				pointStrokeColor: '#fff',
				pointHighlightFill: '#fff',
				pointHighlightStroke: 'rgba(151,187,205,1)',
				data: [28, 48, 40, 19, 86, 27, 90, 102, 123, 145, 60, 161]
			}]
		};
		var options = {
			maintainAspectRatio: false,
			responsive: true,
			legend: {
				display: false
			},
			elements: {
				line: {
					tension: 0,
				}
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
		var ctx = document.getElementById("chart1");
		var myChart = new Chart(ctx, {
			type: 'line',
			data: data,
			options: options
		});
		var legend = myChart.generateLegend();
		$('#chart1Legend').append(legend);
	};

	var chart2Handler = function () {
		// Chart.js Data
		var data = {

			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgba(220,220,220,0.5)',
                borderColor: 'rgba(220,220,220,0.8)',
                highlightFill: 'rgba(220,220,220,0.75)',
                highlightStroke: 'rgba(220,220,220,1)',
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: 'My Second dataset',
                backgroundColor: 'rgba(151,187,205,0.5)',
                borderColor: 'rgba(151,187,205,0.8)',
                highlightFill: 'rgba(151,187,205,0.75)',
                highlightStroke: 'rgba(151,187,205,1)',
                data: [28, 48, 40, 19, 86, 27, 90]
            }]
		};

		// Chart.js Options
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
		var ctx = $("#chart2").get(0).getContext("2d");
		var myChart = new Chart(ctx, {
			type: 'bar',
			data: data,
			options: options
		});
		var legend = myChart.generateLegend();
		//and append it to your page somewhere
		$('#chart2Legend').append(legend);
	};
	var chart3Handler = function () {
		// Chart.js Data
		var data = {
			labels: ["Red", "Green", "Yellow"],
			datasets: [{
				label: "My First Dataset",
				data: [300, 50, 100],
				backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"]
			}]
		};

		// Chart.js Options
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
		var ctx = $("#chart3").get(0).getContext("2d");
		var myChart = new Chart(ctx, {
			type: 'doughnut',
			data: data,
			options: options
		});
		var legend = myChart.generateLegend();
		//and append it to your page somewhere
		$('#chart3Legend').append(legend);
	};
	var chart4Handler = function () {
		// Chart.js Data
		var data = {
			labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
			datasets: [
				{
					label: 'My First dataset',
					backgroundColor: 'rgba(220,220,220,0.2)',
					borderColor: 'rgba(220,220,220,1)',
					pointColor: 'rgba(220,220,220,1)',
					pointStrokeColor: '#fff',
					pointHighlightFill: '#fff',
					pointHighlightStroke: 'rgba(220,220,220,1)',
					data: [65, 59, 90, 81, 56, 55, 40]
				},
				{
					label: 'My Second dataset',
					backgroundColor: 'rgba(151,187,205,0.2)',
					borderColor: 'rgba(151,187,205,1)',
					pointColor: 'rgba(151,187,205,1)',
					pointStrokeColor: '#fff',
					pointHighlightFill: '#fff',
					pointHighlightStroke: 'rgba(151,187,205,1)',
					data: [28, 48, 40, 19, 96, 27, 100]
				}
			]
		};

		// Chart.js Options
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
		var ctx = $("#chart4").get(0).getContext("2d");
		var myChart = new Chart(ctx, {
			type: 'radar',
			data: data,
			options: options
		});
		var legend = myChart.generateLegend();
		//and append it to your page somewhere
		$('#chart4Legend').append(legend);
	};
	// function to initiate Sparkline
	var sparkResize;
	$(window).resize(function (e) {
		clearTimeout(sparkResize);
		sparkResize = setTimeout(sparklineHandler, 500);
	});
	var sparklineHandler = function () {
		$(".sparkline-1 span").sparkline([300, 523, 982, 811, 1300, 1125, 1487], {
			type: "bar",
			barColor: "#D43F3A",
			barWidth: "5",
			height: "24",
			tooltipFormat: '<span style="color: {{color}}">&#9679;</span> {{offset:names}}: {{value}}',
			tooltipValueLookups: {
				names: {
					0: 'Sunday',
					1: 'Monday',
					2: 'Tuesday',
					3: 'Wednesday',
					4: 'Thursday',
					5: 'Friday',
					6: 'Saturday'

				}
			}
		});
		$(".sparkline-2 span").sparkline([400, 650, 886, 443, 502, 412, 353], {
			type: "bar",
			barColor: "#5CB85C",
			barWidth: "5",
			height: "24",
			tooltipFormat: '<span style="color: {{color}}">&#9679;</span> {{offset:names}}: {{value}}',
			tooltipValueLookups: {
				names: {
					0: 'Sunday',
					1: 'Monday',
					2: 'Tuesday',
					3: 'Wednesday',
					4: 'Thursday',
					5: 'Friday',
					6: 'Saturday'

				}
			}
		});
		$(".sparkline-3 span").sparkline([4879, 6567, 5022, 8890, 9234, 7128, 4811], {
			type: "bar",
			barColor: "#46B8DA",
			barWidth: "5",
			height: "24",
			tooltipFormat: '<span style="color: {{color}}">&#9679;</span> {{offset:names}}: {{value}}',
			tooltipValueLookups: {
				names: {
					0: 'Sunday',
					1: 'Monday',
					2: 'Tuesday',
					3: 'Wednesday',
					4: 'Thursday',
					5: 'Friday',
					6: 'Saturday'

				}
			}
		});
		$(".sparkline-4 span").sparkline([1122, 1735, 559, 2534, 1600, 2860, 1345, 1987, 2675, 457, 3965, 3765], {
			type: "line",
			lineColor: '#8e8e93',
			width: "80%",
			height: "47",
			fillColor: "",
			spotRadius: 4,
			lineWidth: 1,
			resize: true,
			spotColor: '#ffffff',
			minSpotColor: '#D9534F',
			maxSpotColor: '#5CB85C',
			highlightSpotColor: '#CE4641',
			highlightLineColor: '#c2c2c5',
			tooltipFormat: '<span style="color: {{color}}">&#9679;</span> {{offset:names}}: {{y:val}}',
			tooltipValueLookups: {
				names: {
					0: 'January',
					1: 'February',
					2: 'March',
					3: 'April',
					4: 'May',
					5: 'June',
					6: 'July',
					7: 'August',
					8: 'September',
					9: 'October',
					10: 'November',
					11: 'December'

				}
			}
		});
		$(".sparkline-5 span").sparkline([422, 1335, 1059, 2235, 1300, 1860, 1126, 1387, 1675, 1357, 2165, 1765], {
			type: "line",
			lineColor: '#8e8e93',
			width: "80%",
			height: "47",
			fillColor: "",
			spotRadius: 4,
			lineWidth: 1,
			resize: true,
			spotColor: '#ffffff',
			minSpotColor: '#D9534F',
			maxSpotColor: '#5CB85C',
			highlightSpotColor: '#CE4641',
			highlightLineColor: '#c2c2c5',
			tooltipFormat: '<span style="color: {{color}}">&#9679;</span> {{offset:names}}: {{y:val}}',
			tooltipValueLookups: {
				names: {
					0: 'January',
					1: 'February',
					2: 'March',
					3: 'April',
					4: 'May',
					5: 'June',
					6: 'July',
					7: 'August',
					8: 'September',
					9: 'October',
					10: 'November',
					11: 'December'

				}
			}
		});
	};
	return {
		init: function () {
			chart1Handler();
			chart2Handler();
			chart3Handler();
			chart4Handler();
			sparklineHandler();
		}
	};
}();