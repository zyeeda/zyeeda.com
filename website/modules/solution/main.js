var currentSolutionColor = '#269FC2';
var changeSolution = function(solution, color) {
	$('.solutions-svg *[fill="' + color + '"]').bind('click', function() {
        $('.high_opacity').attr("opacity", 0.4);
        $('.solutions-svg *[fill="' + currentSolutionColor + '"]').animate({"opacity": 0.4}, 500);

        $(this).attr("opacity", 1);

		$('.solutions .solution').hide();
		$('.solutions .' + solution).fadeIn(1000);
        currentSolutionColor = color;
	});

    $('.solutions-svg text[data-fill="' + color + '"]').bind('click', function() {
        $('.high_opacity').animate({"opacity": 0.4}, 500);
        $('.solutions-svg *[fill="' + currentSolutionColor + '"]').animate({"opacity": 0.4}, 500);
        $('.solutions-svg *[fill="' + color + '"]').animate({"opacity": 1}, 500);
        $('.solutions .solution').hide();
        $('.solutions .' + solution).fadeIn(1000);
        currentSolutionColor = color;
    });

    $('.solutions-svg text[data-fill="' + color + '"]').bind('mouseover', function() {
        $('.solutions-svg *[fill="' + color + '"]').animate({"opacity": 1}, 500);
    });

    $('.solutions-svg text[data-fill="' + color + '"]').bind('mouseout', function() {
        if(currentSolutionColor !== color) {
            $('.solutions-svg *[fill="' + color + '"]').animate({"opacity": 0.4}, 500);
        }
    });

    $('.solutions-svg *[fill="' + color + '"]').bind('mouseover', function() {
        $('.solutions-svg *[fill="' + color + '"]').animate({"opacity": 1}, 500);
    });

    $('.solutions-svg *[fill="' + color + '"]').bind('mouseout', function() {
        if(currentSolutionColor !== color) {
            $('.solutions-svg *[fill="' + color + '"]').animate({"opacity": 0.4}, 500);
        }
    });

};

$(function() {
	//changeSolution("solution1", "#96A854");
	changeSolution("solution2", "#00A89B");
	changeSolution("solution3", "#67C4C9");
	changeSolution("solution4", "#F8B421");
	changeSolution("solution5", "#EB6112");
	changeSolution("solution6", "#00A999");
	changeSolution("solution7", "#7E87C1");
	changeSolution("solution8", "#269FC2");
	changeSolution("solution9", "#6CC7EF");

     $('.solutions-svg *[data-fill="#96A854"]').bind('click', function() {
        $('.high_opacity').animate({"opacity": 0.4}, 1000);
        $('.solutions-svg *[data-fill="#96A854"]').animate({"opacity": 1}, 1000);

        $('.solutions .solution').hide();
        $('.solutions .solution1').fadeIn(1000);
        currentSolutionColor = "#96A854";
    });

    $('.solutions-svg *[data-fill="#96A854"]').bind('mouseover', function() {
        $('.solutions-svg *[data-fill="#96A854"]').animate({"opacity": 1}, 1000);
    });

    $('.solutions-svg *[data-fill="#96A854"]').bind('mouseout', function() {
        console.log(currentSolutionColor);
        if(currentSolutionColor !== "#96A854") {
            $('.solutions-svg *[data-fill="#96A854"]').animate({"opacity": 0.4}, 1000);
        }
    });

	$(window).on('load', function() {
		$("#nav").addClass('show');
		$("#nav #solution-li").addClass('active');
	});

	$('#carousel-manager').carousel({
	 	interval: 15000
	})

});
