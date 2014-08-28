var changeSolution = function(solution, color) {
	$('.solutions-svg *[fill="' + color + '"]').bind('click', function() {
		$('.solutions .solution').hide();
		$('.solutions .' + solution).fadeIn(1000);
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


    var svg = Snap("#svg");
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
    });

});
