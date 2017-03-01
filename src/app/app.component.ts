import { Component } from '@angular/core';
import { OpenViduComponent } from '/home/alex/Documents/Universidad/Cuarto/TFG/OpenVidu/openvidu-webcomponent/src/';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	// Join form
	private sessionId: string;
	private participantId: string;

	private wsUrl: string;
	
	constructor() {
		// Generate fake info
		this.generateParticipantInfo();
	}
	
	private generateParticipantInfo() {
		this.sessionId = "SessionA";
		this.participantId = "Participant" + Math.floor(Math.random() * 100);
	}
	
	sendForm() {
		// Connect to server
		this.wsUrl = "wss://127.0.0.1:8443/";
	}

}
