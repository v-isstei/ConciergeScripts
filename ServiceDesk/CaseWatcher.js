Notification.requestPermission();

let cases = [];

function checkCases() {
    window.setInterval(function() {
        let newCases = [];

        // If there's a case
        if ($("[ng-if='$ctrl.dataCount > 0'] .c-hyperlink").length > 1) {
            $.each($("[ng-if='$ctrl.dataCount > 0'] .c-hyperlink"), function(i, el) {
                if (i > 0) {
                    let currCase = el.innerText;

                    // If we don't know this case yet, add it to both arrays
                    if (newCases.indexOf("currCase") < 0) {
                        if (currCase != "View All") {
                            cases.push(currCase);
                            newCases.push(currCase);
                        }
                    }
                }
            });

            if (newCases.length > 0) {
                if (newCases.length > 0) {
                    new Notification("New Case " + newCases[0]);
                }
            }
        }
    }, 5000);
}