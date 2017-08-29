import { CgiStarterPage } from './app.po';

describe('cgi-starter App', () => {
  let page: CgiStarterPage;

  beforeEach(() => {
    page = new CgiStarterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
