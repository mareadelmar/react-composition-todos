import React, { useState } from "react";

const withStorageListener = WrappedComponent => {
	return function WrappedComponentWithListener() {
		const [storageChange, setStorageChange] = useState(false);

		// listener de la storage
		window.addEventListener("storage", change => {
			console.log("cambió la storage");
			if (change.key === "TODOS_V1") {
				setStorageChange(true);
			}
		});

		return (
			<>
				<WrappedComponent
					show={storageChange}
					toggleShow={setStorageChange}
				/>
			</>
		);
	};
};

export { withStorageListener };
