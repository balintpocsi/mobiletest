exports.config = {
    tests: './tests/native/*.js',
    timeout: 60000,
    output: './output',
    helpers: {
        Appium: {
            app: "./Tipico Sport.app",
            platform: "iOS",
            waitForTimeout: "55000",
            desiredCapabilities:
                {
                    platformVersion: "10.2",
                    deviceName: "iPhone 6s",
                    automationName: "XCUITest",
                    fullReset: "true",
                    autoWebview: "true",
                    newCommandTimeout: "60",
                    autoAcceptAlerts: "true",
                    autoDismissAlerts: "true"
                }
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
        paysafeDepositPage: './helpers/mobile/pages/paysafeDeposit.js',
        promoPopupFragment: './helpers/mobile/fragments/promoPopup.js',
        pushNotificationTutorialFragment: './helpers/mobile/fragments/pushNotificationTutorial.js',
        registrationPage: './helpers/mobile/pages/registration.js',
        settingsPage: './helpers/mobile/pages/settings.js',
        skrillDepositPage: './helpers/mobile/pages/skrillDeposit.js',
        skrillWithdrawPage: './helpers/mobile/pages/skrillWithdraw.js',
        sports: './helpers/mobile/pages/sports.js',
        switchDomainPage: './helpers/mobile/pages/switchDomain.js',
        termsConditionsPage: './helpers/mobile/pages/termsConditions.js',
        users: './helpers/data/users.js',
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
 * Configuration section for ios Native run
 */
if (process.env.profile === 'iosNative') {

    exports.config.helpers.Appium.port = "4723";
    exports.config.helpers.Appium.browser = " ";
    exports.config.helpers.Appium.platform = "iOS";
    exports.config.helpers.Appium.app = "./Tipico Sport.zip";
    exports.config.helpers.Appium.desiredCapabilities = {
        platformVersion: "10.2",
        deviceName: "iPhone 6s",
        automationName: "XCUITest",
        fullReset: "true",
        autoWebview: "true",
        newCommandTimeout: "60",
        autoAcceptAlerts: "true",
        autoDismissAlerts: "true"
    }
}

/**
 * Setting up the environment url
 */
switch (process.env.environment) {
    case undefined:
        break;
    case 'staging':
        exports.config.helpers.Appium.url = ' ';
        break;
    default:
        exports.config.helpers.Appium.url = ' ';
}