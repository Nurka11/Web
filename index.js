function onload() {
	setTimeout(function() {
		document.querySelector('.loader').classList.add("animhid");
		document.querySelector('.homeBar').classList.add("active");
		document.body.scrollTop = 0;
	}, 100);
}


$(window).scroll(function() {
	if ($(document).scrollTop() > 70) {
		$('header').addClass('scrolled');
	}
	else {
		$('header').removeClass('scrolled');
	}

});

$(document).ready(function() {

	// Scrolling to classes
	$('li').each(function(index, el) {
		$(this).click(function(event) {
			$('li').each(function(index, el) {
				$(this).removeClass('active');
			});
			let classToScroll = this.className.replace('Bar','');
			$('html, body').animate({
	            scrollTop: $('.'+classToScroll).offset().top
	        }, 500);
			$(this).addClass('active');
		});
	});

	$('.learnbutton').click(function() {
		$('html, body').animate({
			scrollTop: $('.process').offset().top
		}, 1000);
		$('li').each(function(index, el) {
			$(this).removeClass('active');
		});
		$('.process').addClass('active');
	});

});
