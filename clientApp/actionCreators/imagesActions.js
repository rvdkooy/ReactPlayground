var reflux = require("reflux");
var imagesApi = require("../api/imagesApi");
var _ = require("lodash");

var Actions = reflux.createActions({
    "load": {children: ["completed", "failed"]}
});

Actions.load.listen( function() {
    
    imagesApi.getImages().then((res) => {   
        var sample = _.sample(res.data, 10);
        this.completed(sample);
    }, (res) => {
        this.failed(res);
    });
});

module.exports = Actions;