// transformar el HOC del storage listener en un CUSTOM HOOK
import { useState, useEffect } from "react";

const useStorageListener = sincronizeTodos => {
	const [storageChange, setStorageChange] = useState(false);

	// listener de la storage
	useEffect(() => {
		const onStorageChange = change => {
			console.log("cambió la storage");
			if (change.key === "TODOS_V1") {
				setStorageChange(true);
			}
		};
		window.addEventListener("storage", onStorageChange);

		return () => {
			window.removeEventListener("storage", onStorageChange);
		};
	});

	const toggleShow = () => {
		sincronizeTodos();
		setStorageChange(false);
	};

	return {
		show: storageChange,
		toggleShow,
	};
};

export { useStorageListener };
