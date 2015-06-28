var jQuery = window.jQuery = window.$ = require("jquery");

module.exports.getImages = function() {
    return jQuery.ajax({
            url: "https://api.imgur.com/3/gallery/hot/viral/0.json",
            type: "GET",
            headers:{
                "Authorization": "Client-ID 92a5675bf7ad55f"
            }
        });
};