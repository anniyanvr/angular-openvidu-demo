import { AngularOpenviduDemoNewPage } from './app.po';

describe('angular-openvidu-demo App', () => {
	let page: AngularOpenviduDemoNewPage;

	beforeEach(() => {
		page = new AngularOpenviduDemoNewPage();
	});

	it('should display message saying app works', () => {
		page.navigateTo();
		expect(page.getParagraphText()).toEqual('app works!');
	});
});
