import { useState } from "react";
import BlogsList from "./BlogsList";

const Home = () => {
	let [blogs, setBlog] = useState([
		{ title: "My new blog", body: "lorem ...", author: "alireza", id: 1 },
		{ title: "Welcome Party!", body: "lorem ...", author: "abolfazl", id: 2 },
		{ title: "Web dev top tips", body: "lorem ...", author: "farzad", id: 3 },
	]);

	return (
		<div className="Home">
			<BlogsList blogs={blogs} title="All Blogs!"/>
		</div>
	);
};

export default Home;
