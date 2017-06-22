import { HoopthereitisPage } from './app.po';

describe('hoopthereitis App', () => {
  let page: HoopthereitisPage;

  beforeEach(() => {
    page = new HoopthereitisPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
