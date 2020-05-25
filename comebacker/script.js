$(function() {
	$('.close-over, .close-undermodal').on('click', function () {
		$('#comebacker').fadeOut(300); // 300 скорость исчезновения | disappear speed
		$('body').removeClass('comebackerhidden');
	});

	var comebacker = true;
	
	$(window).mouseout(function(e){
		if(e.pageY - $(window).scrollTop() < 1 && comebacker == true){
			$('#comebacker').fadeIn(300); 
			$('body').addClass('comebackerhidden');
			comebacker = false;
		}
	});

	try {
		setTimeout(
			function show_comebacker() {
				$('#comebacker').fadeIn(300); // 300 скорость появления | appear speed 
				$('body').addClass('comebackerhidden');
			}, 3000 //Время появления в милисекундах | Appear time in milliseconds
		)
	}
	catch (e) {}
});