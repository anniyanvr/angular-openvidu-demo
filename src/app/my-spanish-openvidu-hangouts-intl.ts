import { Injectable } from '@angular/core';

import { OpenViduHangoutsIntl } from 'angular-openvidu';

/** OpenVidu data that requires internationalization. */
@Injectable()
export class MySpanishOpenViduHangoutsIntl extends OpenViduHangoutsIntl {

	/** A label for the loading the component. */
	loadingLabel = 'Cargando...';

	/** A label when connecting to the server. */
	connectingLabel = 'Conectando...';

	/** A label when connecting to the room. */
	connectingToRoomLabel = 'Entrando en la sala...';

	/** A label when the current participant leaves the room. */
	youLeftTheRoomLabel = 'Has salido de la sala';

	/** A label for the fullscreen label. */
	fullscreenLabel = 'Pantalla Completa';

	/** A label for the exit fullscreen label. */
	exitFullscreenLabel = 'Salir de pantalla completa';

	/** A label for the settings label. */
	settingsLabel = 'Ajustes';

	/** A label for "You" in the chat. */
	youLabel = 'Tú';

	/** A label for selecting video inputs. */
	selectVideoInputLabel = 'Selecciona camara';

	/** A label for submitting form as "Ready". */
	readyLabel = 'Listo';

}
