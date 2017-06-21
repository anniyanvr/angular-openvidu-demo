import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Angular Material
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
	MdButtonModule,
	MdCardModule,
	MdIconModule,
	MdInputModule,
	MdSelectModule,
	MdSnackBarModule,
	MdToolbarModule
} from '@angular/material';

// OpenVidu dependencies
import { OpenViduModule, OpenViduHangoutsIntl } from 'angular-openvidu';
import { MySpanishOpenViduHangoutsIntl } from './my-spanish-openvidu-hangouts-intl';
import 'hammerjs';

// My component
import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,

		/* OpenVidu Module */
		OpenViduModule,

		/* Materila Module */
		NoopAnimationsModule,
		MdButtonModule,
		MdCardModule,
		MdIconModule,
		MdInputModule,
		MdSelectModule,
		MdSnackBarModule,
		MdToolbarModule
	],
	providers: [
		// {provide: OpenViduHangoutsIntl, useClass: OpenViduHangoutsIntl},
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {

}
