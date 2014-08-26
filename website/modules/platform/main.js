var changPRemark = function(color) {
	$('.feature path[fill="' + color + '"]').on('click', function() {
		$('.section.premark').css('background-color', color);
		$('.section .desc').hide();
		$('.section div[data-fill="' + color + '"]').show();
	});
}

var c = 0;
var t = undefined;
var timedCount = function() {
	if(c >= 20) {
		stopCount();
		$('.idea:last-child img').attr('src', '/modules/platform/img/thirty-seventy2.svg');
	}
	c += 5;
	t = setTimeout("timedCount()", 5000);
};

var stopCount = function () {
	clearTimeout(t);
};

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

	$('body').scrollspy({
        target: '.platform-nav'
    });

	$(window).on('load', function() {
		$("#nav").addClass('show').css('position', 'absolute');

		console.log();
		timedCount();
	});

	skrollr.init({smoothScrolling: false, mobileDeceleration: 0.004 });
});

