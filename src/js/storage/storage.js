function sessionStorageReady () {
	//TODO : pick from sessionstorage and show
	//$("#jq-txtbox").
	
	$("#jq-button").on("click", function () {
		var txtbox_val = $("#jq-txtbox").value();
		if (txtbox_val && txtbox_val.length > 0) {
			sessionStorage.setItem("textbox", txtbox_val);
		}
	});
}