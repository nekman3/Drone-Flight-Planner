import { browser, ElementFinder } from 'protractor';

export class BrowserUtil {

    waitForElementToBePresent(element: ElementFinder) {
        browser.wait(function () {
            return browser.isElementPresent(element);
        }, 60000, 'Element NOT found');
        return browser.isElementPresent(element);
    }
}
