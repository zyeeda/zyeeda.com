var changeOccupation = function(num) {
	$('.occupation-svg #ot' + num).bind('click', function() {
		$('.occupation-svg .ot').find('path').attr('fill', '#595656');
		$('.occupation-svg #ot' + num).find('path').attr('fill', '#BECC66');
		$('.occupation .occupation-item').css('display', 'none');
		$('.occupation .occupation-item' + num).fadeIn(1000);
		$('.occupation .talent_p').animate({"opacity": 0}, 1000);
		$('.occupation *[data-fill="' + num+ '"]').animate({"opacity": 1}, 1000);
	});
}

$(function() {
	$(window).on('load', function() {
		$("#nav").addClass('show');
		$("#nav #talent-li").addClass('active');
	});

	changeOccupation(1);
	changeOccupation(2);
	changeOccupation(3);

	$('#carousel-response').carousel({
	 	interval: 8000
	})
})
