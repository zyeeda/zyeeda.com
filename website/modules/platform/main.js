var changRemark = function(color) {
	$('.feature path[fill="' + color + '"]').on('click', function() {
		$('.section.remark').css('background-color', color);
		$('.section .desc').hide();
		$('.section div[data-fill="' + color + '"]').show();
	});
}

$(function() {
	$("#nav").addClass('show');
	
	changRemark("#BA84BB");
	changRemark("#ED6A58");
	changRemark("#62ACC5");
	changRemark("#0973BA");
	changRemark("#FFA543");
	changRemark("#828385");
	changRemark("#65CAD0");
	changRemark("#8CB743");
	changRemark("#FECE69");
});
