function ajax_call () {
	console.log("in ajax_call");
	/*$.ajax({
		url : "www.google.com",
		success : function () {
			console.log("success");
		}
	});*/
	$.get("www.google.com");
}