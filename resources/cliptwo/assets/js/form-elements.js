var FormElements = function () {
	"use strict";

	//function to initiate jQuery Mask Plugin
	//more info: https://github.com/igorescobar/jQuery-Mask-Plugin
	var maskInputHandler = function () {		
		var options = {
			placeholder: "__/__/____ __:__:__",
			onComplete: function (date_time) {
				alert('You typed the following: ' + date_time);
			},
			onKeyPress: function (cep, event, currentField, options) {},
			onChange: function (cep) {},
			onInvalid: function (val, e, f, invalid, options) {}
		};

		$('.input-mask-date').mask("00/00/0000", {
			placeholder: "__/__/____"
		});
		$('.input-mask-phone').mask('(000) 000-0000', {
			placeholder: "(___) ___-____"
		});
		$('.input-mask-date-time').mask('00/00/0000 00:00:00', options);
	};
	//function to initiate bootstrap-touchspin
	var touchSpinHandler = function () {
		$("input[name='demo1']").TouchSpin({
			min: 0,
			max: 100,
			step: 0.1,
			decimals: 2,
			boostat: 5,
			maxboostedstep: 10,
			postfix: '%'
		});
		$("input[name='demo2']").TouchSpin({
			min: -1000000000,
			max: 1000000000,
			stepinterval: 50,
			maxboostedstep: 10000000,
			prefix: '$'
		});
		$("input[name='demo3']").TouchSpin({
			verticalbuttons: true
		});
		$("input[name='demo4']").TouchSpin({
			verticalbuttons: true,
			verticalupclass: 'fa fa-plus',
			verticaldownclass: 'fa fa-minus'
		});
		$("input[name='demo5']").TouchSpin({
			postfix: "a button",
			postfix_extraclass: "btn btn-default"
		});
		$("input[name='demo6']").TouchSpin({
			postfix: "a button",
			postfix_extraclass: "btn btn-default"
		});
		$("input[name='demo7']").TouchSpin({
			prefix: "pre",
			postfix: "post"
		});
	};

	var autosizeHandler = function () {
		$('.autosize.area-animated').append("\n");
		autosize($('.autosize'));
	};
	var select2Handler = function () {
		$(".js-example-basic-single").select2();
		$(".js-example-basic-multiple").select2();
		$(".js-example-placeholder-single").select2({
			placeholder: "Select a state"
		});
		var data = [{
			id: 0,
			text: 'enhancement'
		}, {
			id: 1,
			text: 'bug'
		}, {
			id: 2,
			text: 'duplicate'
		}, {
			id: 3,
			text: 'invalid'
		}, {
			id: 4,
			text: 'wontfix'
		}];
		$(".js-example-data-array-selected").select2({
			data: data
		});
		$(".js-example-basic-hide-search").select2({
			minimumResultsForSearch: Infinity
		});
	};
	var datePickerHandler = function () {
		$('.datepicker').datepicker({
			autoclose: true,
			todayHighlight: true
		});
		$('.format-datepicker').datepicker({
			format: "M, d yyyy",
			todayHighlight: true
		});
	};
	var timePickerHandler = function () {
		$('#timepicker-default').wickedpicker();
	};
	var inputLimier = function () {
		var maxLength = 150;
		$("#limit").append('<span id="rchars">' + maxLength + '</span> Character(s) Remaining');
		$('textarea.limited').keyup(function () {
			var textlen = maxLength - $(this).val().length;
			$('#rchars').text(textlen);
		});
	};

	return {
		//main function to initiate template pages
		init: function () {
			maskInputHandler();
			//touchSpinHandler();
			autosizeHandler();
			select2Handler();
			datePickerHandler();
			timePickerHandler();
			inputLimier();
		}
	};
}();