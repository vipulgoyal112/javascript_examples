
/*$(document).ready(function() {
	$(".jq_tag").click( function () {
		console.log("t1 value : " + $(this).attr("t1"));
	});
});*/

function imageCount() {
	
	$(".jq-div").each( function(index) {
		var images = $(this).find('img');
		for (var img in images) {
			console.log(img.attr("_src"));
		}
		
	});
}