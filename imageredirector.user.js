// ==UserScript==
// @name        Image Redirector
// @namespace   https://github.com/RmG152/ImageRedirectorUserScript/
// @version     0.1.1
// @description	Redirect images url from http to relative path
// ==/UserScript==


$('img').prop('src', function() { return this.src.replace(/^http\:/, ''); });
