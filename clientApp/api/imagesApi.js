var jQuery = window.jQuery = window.$ = require("jquery");
var config = require("../config.js");

module.exports.getImages = function() {
    return jQuery.ajax({
            url: config.imgur.viralUrl,
            type: "GET",
            headers:{
                "Authorization": "Client-ID " + config.imgur.clientId
            }
        });
};