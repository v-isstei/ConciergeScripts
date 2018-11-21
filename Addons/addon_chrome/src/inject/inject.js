chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		alert("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

		var notification = new Notification('Notification title', {
			icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
			body: "Hey there! You've been notified!",
		  });
	}
	}, 10);
});