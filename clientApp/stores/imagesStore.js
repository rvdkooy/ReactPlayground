var Reflux = require("reflux");
var imagesActions = require("../actionCreators/imagesActions");

var imagesStore = Reflux.createStore({
    init() {
        this.listenToMany(imagesActions);
    },
    getInitialState() {
        return [];
    },
    onLoad() {
        this.trigger([]);
    },
    onLoadCompleted(result) {
        this.trigger(result);
    },
    onLoadFailed(result) {
        this.trigger([]);
    }
});

module.exports = imagesStore;