import React, { useState } from "react";

const withStorageListener = WrappedComponent => {
	return function WrappedComponentWithListener() {
		const [storageChange, setStorageChange] = useState(false);

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
