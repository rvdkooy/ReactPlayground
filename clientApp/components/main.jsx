var React = require("react");
var jQuery = window.jQuery = window.$ = require("jquery");
var _ = require("lodash");

var Main = React.createClass({
	
	getInitialState() {
		return { images: []};
	},
	componentDidMount() {
		jQuery.ajax({
  			url: "https://api.imgur.com/3/gallery/hot/viral/0.json",
  			type: "GET",
  			headers:{
  				"Authorization": "Client-ID <myid>"
  			}
  		}).then((res) => {
  			var sample = _.sample(res.data, 10);
  			this.setState({ images: sample });
  		});
	},
	render() {
		
		var images = this.state.images.map((i, index) => {
			return (<img key={index} style={ { width: "400px" } } src={i.link} />);
		});

		return (<div>{ images }</div>);
	}
});

module.exports = Main;