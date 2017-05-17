import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

// My component
import { AppComponent } from './app.component';

// OpenVidu dependencies
import { OpenViduModule } from 'angular-openvidu';
import 'hammerjs';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		BrowserAnimationsModule,
		MaterialModule,
		OpenViduModule
	],
	declarations: [
		AppComponent
	],
	bootstrap: [ AppComponent ],
	providers: []
})
export class AppModule {
	
}
