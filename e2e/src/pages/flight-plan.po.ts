import { browser, by, element } from 'protractor';

export class FLighPlanPage {

  agmMap = element(by.xpath('//*[@id="agm_map"]/div/div/div/div/div[2]'));
  createPlanButton = element(by.css('.buttons .create'));
  saveButton = element(by.css('.buttons .save'));

  chooseInvalidMapRoute() {
    browser.actions().mouseMove(this.agmMap,
    {
        x: 100,
        y: 100
    }).click().perform();
  }

  chooseValidMapRoute() {
    browser.actions().mouseMove(this.agmMap,
    {
        x: 100,
        y: 100
    }).click().mouseMove({
        x: 50,
        y: 50
    }).click().mouseMove({
        x: 20,
        y: 20
    }).click().perform();
  }

  createPlan() {
    this.createPlanButton.click();
  }
}
