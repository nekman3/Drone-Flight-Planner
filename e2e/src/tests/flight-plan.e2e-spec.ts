import { BrowserUtil } from '../util/browser.util';
import { browser } from 'protractor';
import { FLighPlanPage } from '../pages/flight-plan.po';

describe('Flight Plan page', () => {
  let page: FLighPlanPage;
  const browserUtil: BrowserUtil = new BrowserUtil();

  beforeEach(() => {
    page = new FLighPlanPage();
  });

  it('should test that Save button is disabled', () => {
    browserUtil.waitForElementToBePresent(page.createPlanButton);
    page.createPlan();
    browserUtil.waitForElementToBePresent(page.agmMap);
    page.chooseInvalidMapRoute();
    browser.sleep(400);
    expect(page.saveButton.isEnabled()).toBe(false);
  });

  it('should test that Save button is enabled', () => {
    browserUtil.waitForElementToBePresent(page.createPlanButton);
    page.createPlan();
    browserUtil.waitForElementToBePresent(page.agmMap);
    page.chooseValidMapRoute();
    browser.sleep(400);
    expect(page.saveButton.isEnabled()).toBe(true);
  });
});
