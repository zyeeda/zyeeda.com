var currentSolutionColor = '#6CC7EF';
var changeSolution = function(solution, color) {
	$('.solutions-svg *[fill="' + color + '"]').bind('click', function() {
        $('.high_opacity').attr("opacity", 0.3);
        $('.solutions-svg *[data-fill="#96A854"]').attr("opacity", 0.3);
        $(this).attr("opacity", 1);

		$('.solutions .solution').hide();
		$('.solutions .' + solution).fadeIn(1000);
        currentSolutionColor = color;
	});

    $('.solutions-svg text[data-fill="' + color + '"]').bind('click', function() {
        $('.high_opacity').attr("opacity", 0.3);
        $('.solutions-svg *[data-fill="#96A854"]').attr("opacity", 0.3);
        $('.solutions-svg *[fill="' + color + '"]').attr("opacity", 1);
        $('.solutions .solution').hide();
        $('.solutions .' + solution).fadeIn(1000);
        currentSolutionColor = color;
    });

    $('.solutions-svg text[data-fill="' + color + '"]').bind('mouseover', function() {
        $('.solutions-svg *[fill="' + color + '"]').attr("opacity", 1);
    });

    $('.solutions-svg text[data-fill="' + color + '"]').bind('mouseout', function() {
        if(currentSolutionColor !== color) {
            $('.solutions-svg *[fill="' + color + '"]').attr("opacity", 0.3);
        }
    });

    $('.solutions-svg *[fill="' + color + '"]').bind('mouseover', function() {
        $('.solutions-svg *[fill="' + color + '"]').attr("opacity", 1);
    });

    $('.solutions-svg *[fill="' + color + '"]').bind('mouseout', function() {
        if(currentSolutionColor !== color) {
            $('.solutions-svg *[fill="' + color + '"]').attr("opacity", 0.3);
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
        $('.high_opacity').attr("opacity", 0.3);
        $('.solutions-svg *[data-fill="#96A854"]').attr("opacity", 1);

        $('.solutions .solution').hide();
        $('.solutions .solution1').fadeIn(1000);
        currentSolutionColor = "#96A854";
    });

    $('.solutions-svg *[data-fill="#96A854"]').bind('mouseover', function() {
        $('.solutions-svg *[data-fill="#96A854"]').attr("opacity", 1);
    });

    $('.solutions-svg *[data-fill="#96A854"]').bind('mouseout', function() {
        console.log(currentSolutionColor);
        if(currentSolutionColor !== "#96A854") {
            $('.solutions-svg *[data-fill="#96A854"]').attr("opacity", 0.3);
        }
    });

	$(window).on('load', function() {
		$("#nav").addClass('show');
		$("#nav #scheme-li").addClass('active');
	});

	$('#carousel-manager').carousel({
	 	interval: 3000
	})


   /* var svg = Snap("#svg");
    svg.select("#nk").hover(function() {
        this.animate({
            fill: "#37536b"
        }, 1000);
    }, function() {
        this.animate({
            fill: "#67C4C9"
        }, 1000);
    });

    svg.select("#to").hover(function() {
        this.animate({
            fill: "#37536b"
        }, 1000);
    }, function() {
        this.animate({
            fill: "#269FC2"
        }, 1000);
    });

    svg.select("#sj").hover(function() {
        this.animate({
            fill: "#37536b"
        }, 1000);
    }, function() {
        this.animate({
            fill: "#00A89B"
        }, 1000);
    });

    svg.select("#aq").hover(function() {
        this.animate({
            fill: "#37536b"
        }, 1000);
    }, function() {
        this.animate({
            fill: "#7E87C1"
        }, 1000);
    });

    svg.select("#zc").hover(function() {
        this.animate({
            fill: "#37536b"
        }, 1000);
    }, function() {
        this.animate({
            fill: "#00A999"
        }, 1000);
    });

    svg.select("#cw").hover(function() {
        this.animate({
            fill: "#37536b"
        }, 1000);
    }, function() {
        this.animate({
            fill: "#EB6112"
        }, 1000);
    });

    svg.select("#rl").hover(function() {
        this.animate({
            fill: "#37536b"
        }, 1000);
    }, function() {
        this.animate({
            fill: "#F8B421"
        }, 1000);
    });

    svg.select("#sjjc").hover(function() {
        this.animate({
            fill: "#37536b"
        }, 1000);
    }, function() {
        this.animate({
            fill: "#6CC7EF"
        }, 1000);
    });*/

});
