var changeOccupation = function(num) {
	$('.occupation-svg #ot' + num).bind('click', function() {
		$('.occupation-svg .ot').find('path').attr('fill', '#595656');
		$('.occupation-svg #ot' + num).find('path').attr('fill', '#fbb608');
		$('.occupation .occupation-item').css('display', 'none');
		$('.occupation .occupation-item' + num).fadeIn(1000);
	});
}

$(function() {
	$(window).on('load', function() {
		$("#nav").addClass('show').css('position', 'absolute');
		$("#nav #talent-li").addClass('active');
	});

	changeOccupation(1);
	changeOccupation(2);
	changeOccupation(3);

	$('#cal_slides').slidesjs({
		width: 720,
		height: 270,
        play: {
			active: true,
			auto: true,
			interval: 3000,
			swap: true,
			effect: "fade"
        },
		navigation: {
			effect: "fade"
		},
		pagination: {
			effect: "fade"
		},
		effect: {
			fade: {
				speed: 500
			}
		}
    });
})