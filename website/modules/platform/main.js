var changRemark = function(color) {
	$('.feature path[fill="' + color + '"]').on('click', function() {
		$('.section.remark').css('background-color', color);
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
	changRemark("#BA84BB");
	changRemark("#ED6A58");
	changRemark("#62ACC5");
	changRemark("#0973BA");
	changRemark("#FFA543");
	changRemark("#828385");
	changRemark("#65CAD0");
	changRemark("#8CB743");
	changRemark("#FECE69");

	$('body').scrollspy({
        target: '.platform-nav'
    });

	$(window).on('load', function() {
		changeNav();
		timedCount();
	});

	skrollr.init({smoothScrolling: false, mobileDeceleration: 0.004 });
});

