function jqueryTriggerReady () {
	
	/*
	$( "#foo" ).on( "click", function(e, src) {
		var fn = function () {
			console.log("in1");
			$( "#foo" ).trigger( "click", ["Custom"] );
		}
		console.log(src);
		if (!src) {
			console.log("in");
			e.preventDefault();
			setTimeout(fn, 1000);
		} else {
			console.log("else");
			return true;
		}
	});
	*/
	
	/*
	$( "#foo" ).on( "click", function() {
		console.log( $( this ).text() );
	});
	$( "#foo" ).trigger( "click" );
	*/
	
	
	
}

function open( _this, e) {
	alert("a");
	console.log(e);
	e.preventDefault();
}