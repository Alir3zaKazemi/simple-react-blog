import { useEffect, useState } from "react";

const useFetch = (url) => {
	let [data, setData] = useState(null);
	let [isLoading, setIsLoading] = useState(true);
	let [error, setError] = useState(null);

	useEffect(() => {
		setTimeout(() => {
			//here for just simulating loading, we just used set timeout
			fetch(url)
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
	}, [url]);
	
	return { data, isLoading, error,setData };
};

export default useFetch;
