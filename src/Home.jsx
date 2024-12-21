import { useState } from "react";

const Home = () => {
	let [blogs, setBlog] = useState([
		{ title: "My new blog", body: "lorem ...", author: "alireza", id: 1 },
		{ title: "Welcome Party!", body: "lorem ...", author: "abolfazl", id: 2 },
		{ title: "Web dev top tips", body: "lorem ...", author: "farzad", id: 3 },
	]);

	return (
		<div className="blogs-container">
			{blogs.map((blog) => (
				<div className="blog-preview" key={blog.id}>
					<h2>{blog.title}</h2>
					<p>Written by :{blog.author}</p>
				</div>
			))}
		</div>
	);
};

export default Home;
