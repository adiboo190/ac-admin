/**
 * AC Dashboard
 * Copyright 2016-2019 Adiboo Creative Design
 * Licensed under GNU/GPL V2 (https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
 */
(function(){
	"use strict";

	$(document).ready(function () {

		$( '#close-button, #close-sm-button' ).click(function () {
			$( this ).find('i').toggleClass('fa-plus fa-minus');
			$('.wrapper').toggleClass('trigger');
		});

	});

	// Scroll to top button appear
	$(document).on('scroll', function() {
		var scrollDistance = $(this).scrollTop();
		if (scrollDistance > 100) {
			$('#btnToUp').fadeIn();
		} else {
			$('#btnToUp').fadeOut();
		}
	});

	// Smooth scrolling using jQuery easing
	$(document).on('click', 'a#btnToUp', function(e) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: ($($anchor.attr('href')).offset().top)
		}, 1000, 'easeInOutExpo');
		e.preventDefault();
	});

})(jQuery);