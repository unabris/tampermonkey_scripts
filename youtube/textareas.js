// ==UserScript==
// @name         YouTube video description textarea resize on edit
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       Unai Abrisketa
// @match        https://www.youtube.com/*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    $.fn.extend({
        autoresize: function () {
            $(this).on('change keyup keydown paste cut', function () {
                $(this).height(0).height(this.scrollHeight);
            }).change();
        }
    });

    $('textarea').autoresize();
})();
