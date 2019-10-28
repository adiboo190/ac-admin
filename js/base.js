/**
 * AC Dashboard
 * Copyright 2016-2019 Adiboo Creative Design
 * Licensed under GNU/GPL V2 (https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
 */
(function(){
	"use strict";

	$(document).ready(function () {

		$( '#close-button, #close-sm-button' ).click(function () {
			$('.wrapper').toggleClass('trigger');
		});

	});

})(jQuery);