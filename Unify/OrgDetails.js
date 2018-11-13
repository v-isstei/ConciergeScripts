function getOrgDetails(){
		let details = "";
		$(".align-dashboard-left .form-label").each(function(i) {
		if(i<14){
			details = details + ($(this).text() + ": " + $(this).next(".col-xs-8.col-md-7").text()) + "\n";
		}
	});

	console.log(details);
}