// let blue = document.getElementById('changeToBlue');
// blue.onclick = function() {
//   alert('test');
//   console.log('blue');
// }

// Test copy
document.getElementById('getOrgDetails').onclick = function ()
  {
      let text = "testing";
      let toCopy = document.getElementById("toCopy");
      toCopy.text = text;
      toCopy.select();
      document.execCommand("copy");

      if (true) // When fixed, check to see if clipboard equals text
      {
        alert('before')
        navigator.clipboard.read();
        alert('after')
        alert("Copy successful");
      }
      else 
      {
        alert("Copy failed");
      }
  }

// // blue
// blue.onclick = function() {
//   browser.tabs.insertCSS({code: ".c-uhfh .brand-neutral { background: blue !important; }"});
// };

// // back to original
// reset.onclick = function() {
//   browser.tabs.insertCSS({code: ".c-uhfh .brand-neutral { background: #2f2f2f !important; }"});
// };

