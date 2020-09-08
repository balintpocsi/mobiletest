let server = require('./server.js');


exports.config = {
    tests: '_test*.js',
    timeout: 60000,
    output: './output',
    helpers: {
        Appium: {
            platform: 'Android',
            device: 'A41',
            port: 4723,
            desiredCapabilities: {
                    platformName: "Android",
                    platformVersion: "10.0",
                    deviceName: "A41",
                    automationName: "UiAutomator2",
                    browserName: 'chrome',
                    fastReset: "true",
                    autoWebview: "true",
                    newCommandTimeout: "60",
                    autoAcceptAlerts: "true",
                    autoDismissAlerts: "true"
                }
        },
        WebDriver : {
            port: 4444,
            browser: "chrome",
            url: "http://localhost"
        }
    },
    include: {
        I: './steps_file.js'
    },
    name: 'appiumproject2'
};

exports.config.bootstrap = function (done) {
    server.start(done);
};
exports.config.teardown = function () {
    server.stop();
};
