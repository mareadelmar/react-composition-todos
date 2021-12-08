import React, { useState, useEffect } from "react";

const withStorageListener = WrappedComponent => {
	return function WrappedComponentWithListener({ sincronizeTodos }) {
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

		return (
			<>
				<WrappedComponent
					show={storageChange}
					toggleShow={toggleShow}
				/>
			</>
		);
	};
};

export { withStorageListener };
