const {
    I
} = inject();

Feature('Android tests');

Scenario('TEST CASE SAMPLE', () => {

    I.amOnPage('https://codecept.io/quickstart/');
    I.switchToWeb();
    I.waitForVisible('//*[@class="logo"]', 30);
    I.click('//*[@class="logo"]');


}).tag('epam').tag('testapp');
