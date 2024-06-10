// ==UserScript==
// @name         aEgis
// @namespace    http://tampermonkey.net/
// @version      1.6.3
// @description  Unblocked Alternative to EdgenTweaks, no cheat alternative to Edgypro and Revolt
// @author       Team_aEgis
// @match        *://*.core.learn.edgenuity.com/*
// @grant        none
// ==/UserScript==
// @donation     https://ko-fi.com/s/c2c9d8f414
(function() {
    'use strict';

    setInterval(function() {
        // Check if the specified element exists
        if (document.querySelector('#uid1_play.pause')) {
            return; // Exit the function if the element exists
        }
    }, 1000); // Add a closing parenthesis and a time interval for the outer setInterval

    setInterval(function() {
        var div = document.getElementById('invis-o-div');
        if (div) {
            div.remove();
        }

        var button = document.querySelector('li.FrameRight');
        if (button) {
            button.click();
        }

        showColumn();

        var nextActivityLink = document.querySelector('a.footnav.goRight');
        if (nextActivityLink) {
            nextActivityLink.click();
        }

        var icon = document.querySelector('i.nav-icon');
        if (icon) {
            icon.click();
        }
    }, 1000);
})();


// Guess Practice
function GuessPractice() {
    if (["Instruction", "Warm-Up", "Summary", "Lecture"].includes(document.getElementById("activity-title").innerText)) {
        var numOption = $("iframe#stageFrame").contents().find("form").find(".answer-choice-button").length;
        if (numOption > 0) {
            $("iframe#stageFrame").contents().find("form").find(".answer-choice-button")[Math.floor(Math.random() * Math.floor(numOption))].click();
        } else if ($("#stageFrame").contents().find("iframe").contents().find(".answer-choice-button").length > 0) {
            $("#stageFrame").contents().find("iframe").contents().find(".answer-choice-button")[Math.floor(Math.random() * Math.floor(4))].click();
        }
        $("#stageFrame").contents().find("#btnCheck")[0].click();
    }
}

// Auto complete vocab
function vocabCompleter() {
    if (document.getElementById("activity-title").innerText == "Vocabulary") {
        $("#stageFrame").contents().find(".uibtn.uibtn-blue.uibtn-arrow-next")[0].click();
        try {
            var txt = window.frames[0].document.getElementsByClassName("word-background")[0].value;
            window.frames[0].document.getElementsByClassName("word-textbox")[0].value = txt;
            $("#stageFrame").contents().find(".word-textbox.word-normal")[0].dispatchEvent(new Event("keyup"));
        } catch (error) {
            return;
        }
        $("#stageFrame").contents().find(".playbutton.vocab-play")[0].click();
        $("#stageFrame").contents().find(".playbutton.vocab-play")[1].click();
        $("#stageFrame").contents().find(".uibtn.uibtn-blue.uibtn-arrow-next")[0].click();
    }
}

function loop() {
    GuessPractice();
    vocabCompleter();
}
setInterval(loop, 2000); // Run loop every 2 seconds


(function() {
    'use strict';

    setInterval(function() {
        var div = document.getElementById('invis-o-div');
        if (div) {
            div.remove();
        }
    }, 1000);
})();

