var React = require("react");
var testUtils = require("react-testutils-additions");
var MainApp = require("../clientApp/components/main.jsx")

var jQuery = require('jquery');
var mockjax = require('jquery-mockjax')(jQuery, window)

describe("When starting the images app", () =>{

    var component;

    beforeEach((done) => {
        mockjax({
            url: "https://api.imgur.com/3/gallery/hot/viral/0.json",
            responseText: {
                data: [ { link: "" }, { link: "" } ]
            },
            logging: false,
            onAfterComplete: () => {
                setTimeout(done);
            }
        });

        component = testUtils.renderIntoDocument(<MainApp />)
    });

    afterEach(() => {
        testUtils.unMountFromDocument(component);
    });

    it("it should start showing random images from imgur", () => {
        var images = testUtils.find(component, "img");
        expect(images.length).toBe(2);
    });
});