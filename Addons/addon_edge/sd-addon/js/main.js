document.getElementById('getOrgDetails').onclick = getNotificationPermission;
function notifyUser(user) {
    alert("notifyUser1");
    // browser.notifications.getNotificationPermission();
    alert("notifyUser2");
    browser.notifications.create({
  
      "type": "basic",
  
      "title": "Google info",
  
      "message": `Hi ${user.name}`
  
    });
    alert("notifyUser3");
    var options = {
        "type": "basic",
        "title": "Test extension",
        "message": "Test",
        "iconUrl": "Logo.png",
        "requireInteraction": false
      };
    browser.notifications.create("id1", options);
    alert("notifyUser4");
}

var allNotificationOptions = {
    "type": "basic",                                       // Types supported: [image, list, progress, basic]. REQUIRED PARAMETER.
    "iconUrl": "icon.png",                                 // Icon for the notification. REQUIRED PARAMETER.
    "title": "Title",                                      // Notification title. REQUIRED PARAMETER.
    "message": "Message",                                  // Notification message. REQUIRED PARAMETER.
    "contextMessage": "Context message",                   // Notification context message.
    "priority": 0,                                         // Values supported: [0, 1, 2].
    "buttons": [{ "title": "Title1", "iconUrl": "icon1.png" }, { "title": "Title2", "iconUrl": "icon2.png" }], // Max 2 buttons supported.
    "imageUrl": "image.png",                               // Only supported for image type notifications.
    "items": [{ "title": "Item1", "message": "Message1" }, { "title": "Item2", "message": "Message2" }], // Max 5 items supported. Only for list type notifications.
    "progress": 10,                                        // Values supported in the range [0-100]. Only for progress type notifications.
    "requireInteraction": false                            // Values supported: [true, false].
};

var basicNotificationOptions = {
    "type": "basic",
    "iconUrl": "icon.png",
    "title": "Basic title",
    "message": "Basic message",
    "contextMessage": "Basic context message",
    "buttons": [{ "title": "Yes", "iconUrl": "ok.png" }, { "title": "No", "iconUrl": "cancel.png" }],
    "requireInteraction": false
};

function getNotificationPermission() 
{
    var t = browser;
    browser.notifications.create("test", basicNotificationOptions, function (notifId) {
        window.alert("Image notification " + notifId + " created");
    });
    // alert("Notification permission = " + Notification.permission);
    // alert("browser.Notification permission = " + browser.Notification.permission);
    // alert(notifications.getPermissionLevel);
    // alert(notifications.getPermissionLevel());
    // let permLevel;
    // browser.notifications.getPermissionLevel(function (p) { permLevel = p })
    //     .then(
    //         function() {
    //             alert(permLevel);
    //         }
    //     ); 
    // alert(t);
    // alert("done");
    // if (Notification.permission == "granted")
    // {
    //     alert("Notification permission = " + Notification.permission);
    // }
    // else 
    // {
    //     Notification.requestPermission().then(
    //         function (permission) 
    //         {
    //             if (Notification.permission != "granted")
    //             {
    //                 alert("Extension cannot work properly without Notification permissions...");
    //             }
    //             else
    //             {
    //                 getNotificationPermission();
    //             }
    //         }
    //     );
    //}
    // // if ( "Notification" in window )
    // // {
    //     // alert("in");
    //     let ask = Notification.requestPermission();
        
    //     browser.notifications.getPermissionLevel(function (level) {
    //         window.alert("Notification permission: " + level);
    //     });
        
    //     alert(browser.notifications.getPermissionLevel());
        
    //     ask.then
    //     (  
            
    //         permission => 
    //             {
    //                 alert("2");
    //                 let msg = new Notification
    //                 ( 
    //                     "Title",
    //                     {
    //                         body: "Hello, World!",
    //                         icon: "/images/color-changer40.png"
    //                     }
    //                 );
    
    //                 msg.addEventListener
    //                 (
    //                     "click",
    //                     event => 
    //                         {
    //                             alert("Click resolved.");   
    //                         }
    //                 );
    //             }
         
    //     );
        // alert("out");
    //}
}