import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);
	const [item, setItem] = useState(initialValue);
	const [isSincronized, setIsSincronized] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			try {
				const localStorageItem = localStorage.getItem(itemName);
				let parsedItem;

				if (!localStorageItem) {
					localStorage.setItem(
						itemName,
						JSON.stringify(initialValue)
					);
					parsedItem = initialValue;
				} else {
					parsedItem = JSON.parse(localStorageItem);
				}

				setItem(parsedItem);
				setLoading(false);

				// se recuperaron de nuevo los datos del localStorage, así que está todo sincronizado:
				setIsSincronized(true);
			} catch (error) {
				setError(error);
			}
		}, 3000);
	}, [isSincronized]);

	const saveItem = newItem => {
		try {
			const stringifiedItem = JSON.stringify(newItem);
			localStorage.setItem(itemName, stringifiedItem);
			setItem(newItem);
		} catch (error) {
			setError(error);
		}
	};

	const sincronizeItem = () => {
		setLoading(true);
		setIsSincronized(false);
	};

	return {
		item,
		saveItem,
		loading,
		error,
		sincronizeItem,
	};
}

export { useLocalStorage };
