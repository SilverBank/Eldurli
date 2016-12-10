import { SilverbankPage } from './app.po';

describe('silverbank App', function() {
  let page: SilverbankPage;

  beforeEach(() => {
    page = new SilverbankPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
