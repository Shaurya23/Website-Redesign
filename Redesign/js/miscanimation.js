$(document).ready(function() {

	var tab1 = false, tab2 = false, tab3 = false, tab4 = false;
	var shrinkTime = 250;

	var fadeOthers = function() {
		$('.tab-selected').fadeOut(100);
	}

	var shrinkOthers = function() {
		$('.tab-gen').animate({
			'height' : "0px",
		}, 1);
		tab1 = false;
		tab2 = false;
		tab3 = false;
		tab4 = false;
	}

	/* tab buttons */

	$('.back-button').click(function() {
		fadeOthers();
		$(this).parent().parent().animate({
			'height' : "0px",
		}, shrinkTime);
		$('.tab-home').fadeIn(100);
		tab1 = false;
		tab2 = false;
		tab3 = false;
		tab4 = false;
	});

	$('.tab-header-1').click(function() {
		if (tab1) {
			$('.tab-1').animate({
				'height' : "0px",
			}, shrinkTime);
			fadeOthers();
			$('.tab-home').fadeIn(100);
			tab1 = false;
		} else {
			shrinkOthers();
			$('.tab-1').animate({
				'height' : "585px",
			}, shrinkTime);
			fadeOthers();
			$(this).find('.tab-selected').fadeIn(100);
			tab1 = true;
		}
	});

	$('.tab-header-2').click(function() {
		if (tab2) {
			$('.tab-2').animate({
				'height' : "0px",
			}, shrinkTime);
			fadeOthers();
			$('.tab-home').fadeIn(100);
			tab2 = false;
		} else {
			shrinkOthers();
			$('.tab-2').animate({
				'height' : "585px",
			}, shrinkTime);
			fadeOthers();
			$(this).find('.tab-selected').fadeIn(100);
			tab2 = true;
		}
	});

	$('.tab-header-3').click(function() {
		if (tab3) {
			$('.tab-3').animate({
				'height' : "0px",
			}, shrinkTime);
			fadeOthers();
			$('.tab-home').fadeIn(100);
			tab3 = false;
		} else {
			shrinkOthers();
			$('.tab-3').animate({
				'height' : "585px",
			}, shrinkTime);
			fadeOthers();
			$(this).find('.tab-selected').fadeIn(100);
			tab3 = true;
		}
	});

	$('.tab-header-4').click(function() {
		if (tab4) {
			$('.tab-4').animate({
				'height' : "0px",
			}, shrinkTime);
			fadeOthers();
			$('.tab-home').fadeIn(100);
			tab4 = false;
		} else {
			shrinkOthers();
			$('.tab-4').animate({
				'height' : "585px",
			}, shrinkTime);
			fadeOthers();
			$(this).find('.tab-selected').fadeIn(100);
			tab4 = true;
		}
	});

	/* nav bar */
	var mousein = false;

	$('.tab-logo').hover(function() {
		$('.tab-home2').fadeIn(50);
		$('.navigation-1').fadeIn(50);
	}, function() {
		setTimeout(function() {
			if (!mousein) {
				$('.tab-home2').fadeOut(50);
				$('.navigation-1').fadeOut(50);
				mousein = false;
			}
		}, 10);

	});

	$('.navigation-1').mouseenter(function(e) {
		mousein = true;
	});

	$('.navigation-1').mouseleave(function(e) {
		setTimeout(function() {

			mousein = false;
			$('.tab-home2').fadeOut(50);
			$('.navigation-1').fadeOut(50);

		}, 10)
	});


	$('.nav-link-l1').click(function() {
		if ($(this).find('a').attr('href'))
			window.location.href = $(this).find('a').attr('href');
	});

	$('.navigation-2').click(function() {
		return false;
	});



	/* links in general nav */

	/* click things */

});
