import { AppPage } from '../pages/app.po';

describe('Drone Flight Planner App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display toolbar title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Drone Flight Planner');
  });
});
