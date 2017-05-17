import { Component } from '@angular/core';

import { MdSnackBar } from '@angular/material';

@Component({
	selector: 'app-root, lala',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	// Join form
	private sessionId: string;
	private participantId: string;
	
	private wsUrl: string;
	private showOpenvidu: boolean = false;
	private sessionClosed: boolean = false;
	
	constructor(public snackBarService: MdSnackBar) {
		// Generate fake participant info
		this.generateParticipantInfo();
	}
	
	private generateParticipantInfo() {
		this.sessionId = "SessionA";
		this.participantId = "Participant" + Math.floor(Math.random() * 100);
		this.wsUrl = "wss://127.0.0.1:8443/";
	}
	
	sendForm() {
		// Setup AngularIpenVidu
		this.showOpenvidu = true;
		this.sessionClosed = false;
	}
	
	goBack() {
		this.showOpenvidu = false;
		this.sessionClosed = false;
	}

	onRoomConnected() {
		this.snackBarService.open('Connected to room', null, {
			duration: 2000
		});
	}

	onErrorRoom() {
		this.showOpenvidu = false;
		this.snackBarService.open('Room error', null, {
			duration: 2000
		});
	}

	onRoomClosed() {
		this.snackBarService.open('Room closed', null, {
			duration: 2000
		});
	}

	onLostConnection() {
		this.snackBarService.open('Lost connection', null, {
			duration: 2000
		});
	}

	onParticipantJoined(participantEvent: any) {
		if (participantEvent.participantId != null) {
			this.snackBarService.open('Participant id: ' + participantEvent.participantId + ' has entered', null, {
				duration: 2000
			});
		}
	}
	
	onParticipantLeft(participantEvent: any) {
		if (participantEvent.participantId != null) {
			this.snackBarService.open('Participant id: ' + participantEvent.participantId + ' has left', null, {
				duration: 2000
			});
		}
	}
	
	onErrorMedia() {
		this.snackBarService.open('There was a media error', null, {
			duration: 2000
		});
	}
	
	onLeaveRoom() {
		this.sessionClosed = true;
		this.snackBarService.open('Left room', null, {
			duration: 2000
		});
	}
	
	onNewMessage(messageEvent: any) {
		if (messageEvent.message != null) {
			this.snackBarService.open('Message received: ' + messageEvent.message, null, {
				duration: 2000
			});	
		}
	}

}
