var apps = document.querySelector("#apps");
var appsdrop = document.querySelector(".apps-dropdown");

apps.onclick = function() {
    var state = appsdrop.getAttribute('class');
    if(state === 'apps-dropdown hidden') {
      appsdrop.setAttribute ('class','apps-dropdown expanded');
    } else {
      appsdrop.setAttribute ('class','apps-dropdown hidden');
    }
}
