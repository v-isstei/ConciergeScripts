var basicNotificationOptions = {

    "type": "basic",

    "iconUrl": "../images/color-changer20.png",

    "title": "Basic title",

    "message": "Basic message",

    "contextMessage": "Basic context message",

    "buttons": [{ "title": "Yes", "iconUrl": "ok.png" }, { "title": "No", "iconUrl": "cancel.png" }],

    "requireInteraction": false

};

// Add listener for onClicked event.

browser.notifications.onClicked.addListener(function (notificationid) {

    window.alert(notificationid + " clicked");

});



// Add listener for onButtonClicked event.

browser.notifications.onButtonClicked.addListener(function (notificationid, buttonIndex) {

    window.alert("Button " + buttonIndex + " of " + notificationid + " clicked");

});



// Add listener for onClosed event.

browser.notifications.onClosed.addListener(function (notificationid, byUser) {

    window.alert("Notification " + notificationid + " closed " + (byUser ? "by user" : "automatically due to timeout"));

});