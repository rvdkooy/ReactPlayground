// Karma configuration
// Generated on Mon Jan 13 2014 16:18:53 GMT+0100 (W. Europe Standard Time)

module.exports = function (config) {
    var configObj = {

        // base path, that will be used to resolve files and exclude
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            {pattern: 'node_modules/es5-shim/es5-shim.js', watched: true, included: true, served: true},
            {pattern: '__tests__/**/*.tests.js', watched: true, included: true, served: true}
        ],
        // list of files to exclude
        exclude: [
            //'__tests__/testUtilities/**/*.js'
        ],
        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-webpack'
        ],
        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        //reporters: ['progress', 'coverage'],
        reporters: ['progress'],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            '__tests__/**/*.tests.js': ['webpack']
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,
        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        //browsers: ['Chrome'],
        browsers: ['PhantomJS'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,

        webpack: {
            // webpack configuration
            module: {
                loaders: [
                    {test: /\.jsx?$/, exclude: [/node_modules/], loader: "babel-loader"}
                ]
            }
        },

        webpackMiddleware: {
            // webpack-dev-middleware configuration
            noInfo: true,
            stats: {
                chunks: false
            }
        }
    };

    config.set(configObj);
};