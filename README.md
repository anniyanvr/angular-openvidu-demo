# Angular Openvidu Demo
[![Dependency Status](https://david-dm.org/alxhotel/angular-openvidu-demo.svg)](https://david-dm.org/alxhotel/angular-openvidu-demo)
[![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://raw.githubusercontent.com/alxhotel/angular-openvidu-demo/master/LICENSE)

This a demo app that implements `angular-openvidu`, using ALL the features included in the component.

<p align="center"><img src="https://github.com/alxhotel/angular-openvidu-demo/blob/master/screenshots/screenshot_main.png?raw=true"/></p>

## Installation

1. Install `@angular/cli` through npm:

	```bash
	sudo npm install -g @angular/cli
	```

2. Start docker:

	```bash
	sudo docker run -p 8443:8443 --rm -e KMS_STUN_IP=193.147.51.12 -e KMS_STUN_PORT=3478 openvidu/openvidu-server-kms
	```

3. Start the server from the root folder of the app:

	```bash
	ng serve
	```

## Usage

Open your browser at: [http://localhost:4200](http://localhost:4200).

The app will automatically reload if you change any of the source files.

## License

Apache Software License 2.0 ©
