let isCI = !!process.env.CI;
let browsers = ['Chrome'];
let autoWatch =  !isCI;
let singleRun = isCI;

module.exports = function (config) {
	config.set({
		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',
		
		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine', '@angular-devkit/build-angular'],
		
		// list of files / patterns to load in the browser
		files: [
			{pattern: './src/test.ts', watched: false}
		],
		
		// list of files to exclude
		exclude: [
		],
		
		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			
		},
		
		plugins: [
			require('karma-jasmine'),
			require('karma-chrome-launcher'),
			require('karma-jasmine-html-reporter'),
			require('karma-coverage-istanbul-reporter'),
			require('@angular-devkit/build-angular/plugins/karma')
		],
		
		client: {
			clearContext: false // leave Jasmine Spec Runner output visible in browser
		},
		
		mime: {
			'text/x-typescript': ['ts', 'tsx']
		},
		
		coverageIstanbulReporter: {
			dir: require('path').join(__dirname, 'coverage'), reports: ['html', 'lcovonly'],
			fixWebpackSourcePaths: true
		},
		
		
		
		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: config.angularCli && config.angularCli.codeCoverage
				? ['progress', 'coverage-istanbul']
				: ['progress', 'kjhtml'],
				
		// web server port
		port: 9876,
		
		// enable / disable colors in the output (reporters and logs)
		colors: true,
		
		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,
		
		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: autoWatch,
		
		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: browsers,
		
		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: singleRun
	});
};
