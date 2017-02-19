// ==UserScript==
// @name        Image Redirector
// @version     0.1.2
// @namespace   https://github.com/RmG152/ImageRedirectorUserScript/
// @author RmG152
// @updateURL https://github.com/RmG152/ImageRedirectorUserScript/raw/master/imageredirector.meta.js
// @run-at document-idle
// @description	Redirect images url from http to relative path
// ==/UserScript==


$('img').prop('src', function() { return this.src.replace(/^http\:/, ''); });