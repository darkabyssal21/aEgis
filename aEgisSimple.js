// ==UserScript==
// @name         aEgis Simple
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Attempted Unblocked Alternative to EdgenTweaks
// @author       Team_aEgis
// @match        *://*.core.learn.edgenuity.com/*
// @grant        none
// ==/UserScript==
// @donation     https://ko-fi.com/s/c2c9d8f414

(function() {
    'use strict';

    setInterval(function() {
        var div = document.getElementById('invis-o-div');
        if (div) {
            div.remove();
        }
    }, 1000);
})();

