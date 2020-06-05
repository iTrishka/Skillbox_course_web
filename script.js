$(function() {
	console.log("Привет");

	function disableScroll(){
		$('html, body').on('mousewheel', function(){
			return false;
		});
	}

	function enableScroll(){
		$('html, body').off('mousewheel');
			return false;
	}

	$('.header-button').click(function(){
		$('.popup-container').fadeIn(1500, disableScroll);
	});

	$('.popup-container').click(function(event){
		if(event.target == this) {
			$(this).fadeOut(500, enableScroll);
		}
	});

	$('.button-footer').click(function(){
		$('.popup-container').fadeIn(1500, disableScroll);
	});

	$('.button-orange').click(function(){
		$('.popup-container').fadeIn(1500, disableScroll);
	});


	$(".tel-task").mask("+7(999)999-9999");

	var $page = $('html, body');
	$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

});


