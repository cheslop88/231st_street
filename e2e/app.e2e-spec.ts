import { RevisedGalleryPage } from './app.po';

describe('revised-gallery App', function() {
  let page: RevisedGalleryPage;

  beforeEach(() => {
    page = new RevisedGalleryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
