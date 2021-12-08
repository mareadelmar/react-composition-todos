import React from "react";
import { withStorageListener } from "./withStorageListener";

const StorageAlert = ({ show, toggleShow }) => {
	const handleClick = () => {
		toggleShow(false);
		// RECARGAR PÁGINA
	};

	if (show) {
		return (
			<div>
				<p>Se realizaron cambios sobre otra pestaña</p>
				<button onClick={handleClick}>Recargar la página</button>
			</div>
		);
	} else {
		return null;
	}
};

const StorageAlertWithListener = withStorageListener(StorageAlert);

export { StorageAlertWithListener };
