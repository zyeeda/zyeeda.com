var changPRemark = function(color) {
	$('.feature path[fill="' + color + '"]').on('click', function() {
		$('.section.premark').css('background-color', color);
		$('.section .desc').hide();
		$('.section div[data-fill="' + color + '"]').fadeIn(1000);
	});

	$('.feature text[data="' + color + '"]').on('click', function() {
		$('.section.premark').css('background-color', color);
		$('.section .desc').hide();
		$('.section div[data-fill="' + color + '"]').fadeIn(1000);
	});
}

var c = 0;
var t = undefined;
var timedCount = function() {
	var d = new Date();
	if(d.getHours() === 10 && (d.getMinutes() === 30)) {
		stopCount();
		$('.idea:last-child .img').html('<img src=' + __uri("/modules/platform/img/thirty-seventy2.svg") + ' />');
		return;
	}
	t = setTimeout("timedCount()", 60000);
};

var stopCount = function () {
	clearTimeout(t);
	setTimeout(function() {
		$('.idea:last-child .img').html('<img src=' + __uri("/modules/platform/img/thirty-seventy.svg") + ' />');
	}, 60000);
};

var startCount = function() {
	var d = new Date();
	if(d.getHours() === 9 && (d.getMinutes() >= 20 || d.getMinutes() <= 40)) {
		timedCount();
	}
}

$(function() {
	changPRemark("#B280B4");
	changPRemark("#E16856");
	changPRemark("#61A5BC");
	changPRemark("#136DAE");
	changPRemark("#F4A046");
	changPRemark("#828385");
	changPRemark("#64C1C6");
	changPRemark("#89B046");
	changPRemark("#EAB32B");


	$(window).on('load', function() {
		$("#nav").addClass('show');
		$("#nav #platform-li").addClass('active');

		startCount();
	});

	skrollr.init({smoothScrolling: false, mobileDeceleration: 0.004 });
});

