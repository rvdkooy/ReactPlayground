var React = require("react");
var imagesApi = require("../api/imagesApi");
var imagesStore = require("../stores/imagesStore");
var imagesActions = require("../actionCreators/imagesActions");
var Reflux = require("reflux");

var Main = React.createClass({
	mixins: [Reflux.connect(imagesStore,"images")],
    componentDidMount() {
        imagesActions.load();
	},
    _refresh() {
        imagesActions.load();
    },
	render() {
		
		var images = this.state.images.map((i, index) => {
			return (<img key={index} style={ { width: "400px" } } src={i.link} />);
		});
        
		return (<div>
                    <div>
                        <button onClick={ this._refresh }>refresh</button>                   
                    </div>
                    <div>
                        { images }
                    </div>
                </div>);
	}
});

module.exports = Main;