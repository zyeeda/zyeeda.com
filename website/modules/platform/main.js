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
	changPRemark("#BA84BB");
	changPRemark("#ED6A58");
	changPRemark("#62ACC5");
	changPRemark("#0973BA");
	changPRemark("#FFA543");
	changPRemark("#828385");
	changPRemark("#65CAD0");
	changPRemark("#8CB743");
	changPRemark("#FECE69");


	$(window).on('load', function() {
		$("#nav").addClass('show');
		$("#nav #platform-li").addClass('active');

		startCount();
	});

	skrollr.init({smoothScrolling: false, mobileDeceleration: 0.004 });
});

