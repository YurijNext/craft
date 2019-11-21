$(document).ready(function() {

	function toggleMenu() {
		$('.js-menu-open').toggleClass('hide');
		$('.js-address').toggleClass('hide');
		$('.js-menu-close').toggleClass('hide');
		$('.js-full-menu').toggleClass('header-menu-active');
	}

	$(window).scroll(function() {
		let scrolled = $(this).scrollTop();

		if(scrolled >= 70) {
			$('.main-header').addClass('header-narrow');
		} else {
			$('.main-header').removeClass('header-narrow');
		}
	})

	$('.js-menu-open').on('click', function(e) {
		e.preventDefault();
		toggleMenu();	
	});

	$('.js-menu-close').on('click', function(e) {
		e.preventDefault();
		toggleMenu();	
	});


	/** Slick sliders **/

	$('.shop-slider').slick({
		draggable: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipe: true,
		arrows: false,
		fade: true,
		asNavFor: '.logo-slider',
		arrows: false,
		focusOnSelect: true,
		cssEase: 'ease-in-out',
		infinite: false,
	});

	$('.logo-slider').slick({
		draggable: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		swipe: true,
		arrows: false,
		fade: false,
		focusOnSelect: true,
		asNavFor: '.shop-slider',
		cssEase: 'ease-in-out',
		infinite: false,
	});

	$('.shop-slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
		console.log(event);
		console.log(slick);
		console.log(currentSlide);
		console.log(nextSlide);

		console.log(slick.$slides[currentSlide]);
	});

});