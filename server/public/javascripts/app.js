webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Main = __webpack_require__(157);

	var container = document.getElementById('mainContainer');

	React.render(React.createElement(Main, null), container);

/***/ },

/***/ 157:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);
	var imagesApi = __webpack_require__(158);
	var imagesStore = __webpack_require__(161);
	var imagesActions = __webpack_require__(184);
	var Reflux = __webpack_require__(162);

	var Main = React.createClass({
	    displayName: "Main",

	    mixins: [Reflux.connect(imagesStore, "images")],
	    componentDidMount: function componentDidMount() {
	        imagesActions.load();
	    },
	    _refresh: function _refresh() {
	        imagesActions.load();
	    },
	    render: function render() {

	        var images = this.state.images.map(function (i, index) {
	            return React.createElement("img", { key: index, style: { width: "400px" }, src: i.link });
	        });

	        return React.createElement(
	            "div",
	            null,
	            React.createElement(
	                "div",
	                null,
	                React.createElement(
	                    "button",
	                    { onClick: this._refresh },
	                    "refresh"
	                )
	            ),
	            React.createElement(
	                "div",
	                null,
	                images
	            )
	        );
	    }
	});

	module.exports = Main;

/***/ },

/***/ 158:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var jQuery = window.jQuery = window.$ = __webpack_require__(159);
	var config = __webpack_require__(160);

	module.exports.getImages = function () {
	    return jQuery.ajax({
	        url: config.imgur.viralUrl,
	        type: "GET",
	        headers: {
	            "Authorization": "Client-ID " + config.imgur.clientId
	        }
	    });
	};

/***/ },

/***/ 160:
/***/ function(module, exports) {

	"use strict";

	module.exports.imgur = {
	    "viralUrl": "https://api.imgur.com/3/gallery/hot/viral/0.json",
	    "clientId": "<yourclientid>"
	};

/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Reflux = __webpack_require__(162);
	var imagesActions = __webpack_require__(184);

	var imagesStore = Reflux.createStore({
	    init: function init() {
	        this.listenToMany(imagesActions);
	    },
	    getInitialState: function getInitialState() {
	        return [];
	    },
	    onLoad: function onLoad() {
	        this.trigger([]);
	    },
	    onLoadCompleted: function onLoadCompleted(result) {
	        this.trigger(result);
	    },
	    onLoadFailed: function onLoadFailed(result) {
	        this.trigger([]);
	    }
	});

	module.exports = imagesStore;

/***/ },

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var reflux = __webpack_require__(162);
	var imagesApi = __webpack_require__(158);
	var _ = __webpack_require__(185);

	var Actions = reflux.createActions({
	    "load": { children: ["completed", "failed"] }
	});

	Actions.load.listen(function () {
	    var _this = this;

	    imagesApi.getImages().then(function (res) {
	        var sample = _.sample(res.data, 10);
	        _this.completed(sample);
	    }, function (res) {
	        _this.failed(res);
	    });
	});

	module.exports = Actions;

/***/ }

});