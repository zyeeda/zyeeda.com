var changeSolution = function(solution, color) {
	$('.solutions-svg *[fill="' + color + '"]').bind('click', function() {
		$('.solutions .solution').hide();
		$('.solutions .' + solution).show();
	});
};

var show = function(el, time, op) {
	var svg = Snap('.manager svg');
	setTimeout(function() {
        svg.selectAll(el).animate({opacity: op}, 1000);
    }, time);
};

var swap = function(id1, id2, time) {
	setTimeout(function() {
        $(id1).hide();
		$(id2).fadeIn(1000);
    }, time);
}

var anima = function(interval) {
	show('#g_team', 1 * interval, 1);
	swap('#g_whole_svc', '#g_team_svc', 1 * interval);

	show('#g_skill', 2 * interval, 1);
	swap('#g_team_svc', '#g_skill_svc', 2 * interval);

	show('#g_management', 3 * interval, 1);
	swap('#g_skill_svc', '#g_management_svc', 3 * interval);
	
	show('#g_whole', 4 * interval, 1);
	swap('#g_management_svc', '#g_whole_svc', 4 * interval);

	show('#g_produce', 5 * interval, 1);
	swap('#g_whole_svc', '#g_produce_svc', 5 * interval);

	// show('#g_produce', 6 * interval, 0);
	// swap('#g_produce_svc', '#g_whole_svc', 6 * interval);

	// show('#g_whole', 7 * interval, 0);
	// swap('#g_whole_svc', '#g_management_svc', 7 * interval);

	// show('#g_management', 8 * interval, 0);
	// swap('#g_management_svc', '#g_skill_svc', 8 * interval);

	// show('#g_skill', 9 * interval, 0);
	// swap('#g_skill_svc', '#g_team_svc', 9 * interval);

	// show('#g_team', 10 * interval, 0);
	// swap('#g_team_svc', '#g_whole_svc', 10 * interval);

	setTimeout(function() {
		swap('#g_produce_svc', '#g_whole_svc', 0);
		Snap('.manager svg').selectAll('g[id^=g_]').animate({opacity: 0}, 1000);
		anima(interval);
	}, 6 * interval);
}

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
	});

	var isShow = false;
	skrollr.init({
		smoothScrolling: false, mobileDeceleration: 0.004,
	    render: function(data) {
	    	
	    }
	});
	anima(3000);

    // svg.selectAll('g').animate({opacity: 1}, 1000);
    // $('svg g').mouseover(function(e) {
    // 	if(this.id) {
    // 		svg.select('#' + this.id).animate({opacity: 1}, 200);
    // 	}
    	
    // });

    // $('svg g[id^=g_]').bind('mouseover', function(e) {
    // 	console.log(this, 111);
    // 	$('.manager .svc').hide(100);
    // 	var id = this.id;
    // 	setTimeout(function() {
    // 		$('#' + id + '_svc').fadeIn(500);
    // 	}, 200);
    // });
});