// ==UserScript==
// @name        Image Redirector
// @version     0.1.3
// @namespace   https://github.com/RmG152/ImageRedirectorUserScript/
// @author RmG152
// @updateURL https://github.com/RmG152/ImageRedirectorUserScript/raw/master/imageredirector.meta.js
// @run-at document-idle
// @description	Redirect images url from http to relative path
// ==/UserScript==

if (window.jQuery) {
    $('img').prop('src', function() { return this.src.replace(/^http\:/, ''); });
} else {
    var anchors = document.getElementsByTagName("img");

    for (var i = 0; i < anchors.length; i++) {
        anchors[i].src = anchors[i].src.replace(/^http\:/, '');
    }
}