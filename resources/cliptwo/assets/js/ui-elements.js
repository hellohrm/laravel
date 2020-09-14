'use strict';
var UIElements = function () {
	var ratingHandler = function () {
		$('.rating, .rating-tooltip').each(function () {
			$(this).val() > 0 ? $(this).next(".badge").show().text($(this).val() || ' ') : $(this).next(".badge").hide();
		});
		$('.rating-tooltip').rating({
			extendSymbol: function (rate) {
				$(this).tooltip({
					container: 'body',
					placement: 'bottom',
					title: 'Rate ' + rate
				});
			}
		});
		$('.rating, .rating-tooltip').on('change', function () {
			$(this).next('.badge').show().text($(this).val());
		});
	};
	return {
		init: function () {
			ratingHandler();
		}
	};
}();