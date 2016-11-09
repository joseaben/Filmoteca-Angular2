import { FilmotecaAngular2Page } from './app.po';

describe('filmoteca-angular2 App', function() {
  let page: FilmotecaAngular2Page;

  beforeEach(() => {
    page = new FilmotecaAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
