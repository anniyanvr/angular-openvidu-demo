import { AngularOpenviduDemoPage } from './app.po';

describe('angular-openvidu-demo App', () => {
	let page: AngularOpenviduDemoPage;

	beforeEach(() => {
		page = new AngularOpenviduDemoPage();
	});

	it('should display welcome message', () => {
		page.navigateTo();
		expect(page.getParagraphText()).toEqual('Welcome to app!');
	});
});
