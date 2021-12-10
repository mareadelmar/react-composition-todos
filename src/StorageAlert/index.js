import React from "react";
//import { withStorageListener } from "./withStorageListener";
import { useStorageListener } from "./useStorageListener";

const StorageAlert = ({ sincronizeTodos }) => {
	const { show, toggleShow } = useStorageListener(sincronizeTodos);

	if (show) {
		return (
			<div>
				<p>Se realizaron cambios sobre otra pestaña</p>
				<button onClick={toggleShow}>Cargar cambios</button>
			</div>
		);
	} else {
		return null;
	}
};

//const StorageAlertWithListener = withStorageListener(StorageAlert);
//export { StorageAlertWithListener };

export { StorageAlert };
