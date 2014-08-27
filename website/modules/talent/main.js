var changeOccupation = function(num) {
	$('.occupation-svg #ot' + num).bind('click', function() {
		$('.occupation-svg .ot').find('path').attr('fill', '#595656');
		$('.occupation-svg #ot' + num).find('path').attr('fill', '#fbb608');
		$('.occupation .occupation-item').css('opacity', 0);
		$('.occupation .occupation-item' + num).css('opacity', 1);
	});
}

$(function() {
	$(window).on('load', function() {
		$("#nav").addClass('show').css('position', 'absolute');
	});

	changeOccupation(1);
	changeOccupation(2);
	changeOccupation(3);
})