$(function() {
	$(window).on('load', function() {
		$("#nav").addClass('show').css('position', 'absolute');
		$("#nav #joinus-li").addClass('active');
	});

	$('.position-op .msg').on('mouseover', function() {
		$(this).hide();
		$(this).next().fadeIn(300);
	})

	$('.position-op .send').on('mouseout', function() {
		$(this).hide();
		$(this).prev().fadeIn(300);
	})

})