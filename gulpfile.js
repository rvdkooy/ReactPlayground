var gulp = require("gulp");
var gulpUtil = require("gulp-util");
var webpack = require("webpack");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

gulp.task("compilejs", function() {


	var webpackConfig = {
        context: __dirname + "/clientApp",
        entry: {
        	app: "./app",
        	vender: ["react", "jquery"]
        },
        output: {
            path: __dirname + "/server/public/javascripts",
            filename: '[name].js'
        },
        plugins: [
	        new CommonsChunkPlugin("vender", "vendor.bundle.js"),
	    ],
        watch: true,
        module: {
            loaders: [
                {test: /\.jsx?$/, exclude: [/node_modules/], loader: "babel-loader"}
            ]
        }
    };


	webpack(webpackConfig, function (err, stats) {
            if (err) throw new gulpUtil.PluginError("webpack", err);

            gulpUtil.log("[webpack]", stats.toString({
                chunks: false,
                colors: true

            }));
        });
});


gulp.task("default", ["compilejs"]);