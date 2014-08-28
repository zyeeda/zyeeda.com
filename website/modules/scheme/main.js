var changeSolution = function(solution, color) {
	$('.solutions-svg *[fill="' + color + '"]').bind('click', function() {
		$('.solutions .solution').hide();
		$('.solutions .' + solution).show();
	});
};

$(function() {
	changeSolution("solution1", "#96A854");
	changeSolution("solution2", "#00A89B");
	changeSolution("solution3", "#67C4C9");
	changeSolution("solution4", "#F8B421");
	changeSolution("solution5", "#EB6112");
	changeSolution("solution6", "#00A999");
	changeSolution("solution7", "#7E87C1");
	changeSolution("solution8", "#269FC2");
	changeSolution("solution9", "#6CC7EF");	

	$(window).on('load', function() {
		$("#nav").addClass('show').css('position', 'absolute');
		$("#nav #scheme-li").addClass('active');
	});

	$('#carousel-manager').carousel({
	 	interval: 3000
	})
});