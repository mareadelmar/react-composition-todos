import React from "react";
import { withStorageListener } from "./withStorageListener";

const StorageAlert = ({ show, toggleShow }) => {
	if (show) {
		return <p>¡¡hubo cambios!!</p>;
	} else {
		return <p>todavía ningún cambio</p>;
	}
};

const StorageAlertWithListener = withStorageListener(StorageAlert);

export { StorageAlert };
