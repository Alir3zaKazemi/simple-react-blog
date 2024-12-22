import { useEffect, useState } from "react";

const useFetch = (url) => {
	let [data, setData] = useState(null);
	let [isLoading, setIsLoading] = useState(true);
	let [error, setError] = useState(null);

	useEffect(() => {
		let abortCont = new AbortController();
		setTimeout(() => {
			//here for just simulating loading, we just used set timeout
			fetch(url, { signal: abortCont.signal })
				.then((res) => {
					if (!res.ok) {
						throw new Error("something wrong with fetching");
					}
					return res.json();
				})
				.then((data) => {
					setError(null);
					setData(data);
					setIsLoading(false);
				})
				.catch((err) => {
					setError(err.message);
					setIsLoading(false);
				});
		}, 2000);
		return () => abortCont.abort();
	}, [url]);

	return { data, isLoading, error, setData };
};

export default useFetch;
