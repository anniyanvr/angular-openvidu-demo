import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MaterialModule, OpenViduComponent, StreamComponent } from 'angular-openvidu';

import 'hammerjs';

@NgModule({
	declarations: [
		AppComponent,
		OpenViduComponent,
		StreamComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		MaterialModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
	
}
