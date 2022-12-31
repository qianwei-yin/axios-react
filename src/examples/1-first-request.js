import { useEffect } from "react";
import axios from "axios";
// limit, if 429 wait for 15 min and try again
const url = "https://course-api.com/react-store-products";

const FirstRequest = () => {
	async function fetchData() {
		try {
			const response = await axios.get(url);
			const data = response.data;
			console.log(data);
		} catch (error) {
			// using axios, all the errors are caught in the catch-block. But using fetch, it only catches network error.
			console.log(error.response);
		}
	}

	useEffect(() => {
		fetchData();
	}, []);

	return <h2 className="text-center">first request</h2>;
};
export default FirstRequest;
