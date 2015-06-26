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

	'use strict';

	var React = __webpack_require__(1);

	var Main = React.createClass({
		displayName: 'Main',

		render: function render() {
			return React.createElement(
				'div',
				null,
				'some stuff here...'
			);
		}
	});

	module.exports = Main;

/***/ }

});