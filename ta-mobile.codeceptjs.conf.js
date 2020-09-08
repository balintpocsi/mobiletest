let server = require('./helpers/custom_methods/server.js');
exports.config = {
    tests: './tests/mobile/*Test.js',
    timeout: 30000,
    output: './output',
    helpers: {
        WebDriverIO: {
            url: 'http://localhost',
            waitForTimeout: 55000,
            coloredLogs: true
        },
        MyHelper: {
            require: './helpers/custom_methods/myHelper.js'
        }
    },
    hooks: [
        './helpers/custom_methods/testRailHelper.js'
    ],
    include: {
        I: './helpers/stepsFile.js',
        bankWithdrawPage: './helpers/mobile/pages/bankWithdraw.js',
        beforeSteps: './helpers/mobile/steps/beforeSteps.js',
        betsPage: './helpers/mobile/pages/bets.js',
        cancelRegistrationFragment: './helpers/mobile/fragments/cancelRegistrationPopup.js',
        cashoutTutorialFragment: './helpers/mobile/fragments/cashoutTutorial.js',
        customerCardPaymentPage: './helpers/mobile/pages/customerCardPayment.js',
        depositPage: './helpers/mobile/pages/deposit.js',
        depositSteps: './helpers/mobile/steps/depositSteps.js',
        domains: './helpers/data/domainsMobile.js',
        features: './helpers/data/features.js',
        firstDepositPage: './helpers/mobile/pages/firstDeposit.js',
        footerPage: './helpers/mobile/fragments/footer.js',
        headerPage: './helpers/mobile/fragments/header.js',
        homePage: './helpers/mobile/pages/home.js',
        i18n: './helpers/data/i18n.js',
        informationPage: './helpers/mobile/pages/information.js',
        languagePage: './helpers/mobile/pages/language.js',
        lastTransactionsPage: './helpers/mobile/pages/lastTransactions.js',
        loginPage: './helpers/mobile/pages/login.js',
        loginSteps: './helpers/mobile/steps/loginSteps.js',
        mastercardDepositPage: './helpers/mobile/pages/mastercardDeposit.js',
        myAccountPage: './helpers/mobile/pages/myAccount.js',
        netellerWithdrawPage: './helpers/mobile/pages/netellerWithdraw.js',
        payments: './helpers/data/payments.js',
        paypalWithdrawPage: './helpers/mobile/pages/paypalWithdraw.js',
        paysafeDepositPage: './helpers/mobile/pages/paysafeDeposit.js',
        promoPopupFragment: './helpers/mobile/fragments/promoPopup.js',
        registrationPage: './helpers/mobile/pages/registration.js',
        settingsPage: './helpers/mobile/pages/settings.js',
        skrillDepositPage: './helpers/mobile/pages/skrillDeposit.js',
        skrillWithdrawPage: './helpers/mobile/pages/skrillWithdraw.js',
        sports: './helpers/mobile/pages/sports.js',
        switchDomainPage: './helpers/mobile/pages/switchDomain.js',
        termsConditionsPage: './helpers/mobile/pages/termsConditions.js',
        users: './helpers/data/users.js',
        visaDepositPage: './helpers/mobile/pages/visaDeposit.js',
        visaWithdrawPage: './helpers/mobile/pages/visaWithdraw.js',
        withdrawPage: './helpers/mobile/pages/withdraw.js',
        withdrawSteps: './helpers/mobile/steps/withdrawSteps.js',
    },
    mocha: {
        reporterOptions: {
            reportDir: './output',
            enableCharts: true,
            reportTitle: 'Mobile Rebrush Reporter'
        }
    },
    name: 'ta-mobile'
};

/**
 * Console output for actual config file
 */
console.log('---- Loading CodeceptJS config for: ' + process.env.profile + ' ----');

/**
 * Configuration section for local run
 */
if (process.env.profile === 'local') {

    exports.config.helpers.WebDriverIO.desiredCapabilities = {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                'user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_3 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) CriOS/60.0.3112.89 Mobile/14G60 Safari/602.1'
            ]
        },
        mobileEmulationEnabled: true
    };
    exports.config.helpers.WebDriverIO.windowSize = '500x900';
    exports.config.helpers.WebDriverIO.browser = 'chrome';
    exports.config.helpers.WebDriverIO.restart = true;
    exports.config.bootstrap = function (done) {
        server.start(done);
    };
    exports.config.teardown = function () {
        server.stop();
    };
}

/**
 * Configuration section for docker run
 */
if (process.env.profile === 'docker') {

    exports.config.helpers.WebDriverIO.host = process.env.HOST;
    exports.config.helpers.WebDriverIO.desiredCapabilities = {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                'user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 8_0_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A405 Safari/600.1.4'
            ]
        },
        mobileEmulationEnabled: true
    };
    exports.config.helpers.WebDriverIO.windowSize = '415x730';
    exports.config.helpers.WebDriverIO.browser = 'chrome';
    exports.config.helpers.WebDriverIO.restart = true;
    exports.config.tests = process.env.testsfilter;
}

/**
 * Configuration section for docker-local run
 */
if (process.env.profile === 'docker-local') {

    exports.config.helpers.WebDriverIO.host = process.env.HOST;
    exports.config.helpers.WebDriverIO.desiredCapabilities = {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                'user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 8_0_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A405 Safari/600.1.4'
            ]
        },
        mobileEmulationEnabled: true
    };
    exports.config.helpers.WebDriverIO.windowSize = '415x730';
    exports.config.helpers.WebDriverIO.browser = 'chrome';
    exports.config.helpers.WebDriverIO.restart = true;
}

/**

 /**
 * Configuration section for ios Native run
 */
if (process.env.profile === 'iosNative') {

    exports.config.helpers.WebDriverIO.desiredCapabilities = {
        app: "./TipicoApp.zip",
        platformName: "iOS",
        platformVersion: "10.3",
        deviceName: "iPhone 6",
        autoWebview: true,
        automationName: "XCUITest",
        fullReset: true,
        newCommandTimeout: 60,
    };
    exports.config.helpers.WebDriverIO.port = 4723;
    exports.config.helpers.WebDriverIO.browser = ' ';
}

/**
 * Configuration section for ios web (Safari)
 */
if (process.env.profile === 'iosWeb') {

    exports.config.helpers.WebDriverIO.desiredCapabilities = {
        platformName: "iOS",
        platformVersion: "10.2",
        deviceName: "iPhone 6",
        newCommandTimeout: 60,
    };
    exports.config.helpers.WebDriverIO.port = 4723;
    exports.config.helpers.WebDriverIO.browser = 'Safari';
    exports.config.helpers.WebDriverIO.restart = true;
}

/**
 * Setting up the environment url
 */
switch (process.env.environment) {
    case undefined:
    case 'prod':
        exports.config.helpers.WebDriverIO.url = 'https://m.tipico.com';
        break;
    default:
        exports.config.helpers.WebDriverIO.url = 'https://mobile-' + process.env.environment + '.tipdev.com';
}