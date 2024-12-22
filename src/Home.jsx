import { useState } from "react";
import BlogsList from "./BlogsList";

const Home = () => {
	let [blogs, setBlog] = useState([
		{ title: "My new blog", body: "lorem ...", author: "alireza", id: 1 },
		{ title: "Welcome Party!", body: "lorem ...", author: "abolfazl", id: 2 },
		{
			title: "Web dev top tips",
			body: "lorem ...",
			author: "alireza",
			id: 3,
		},
	]);

	const handleDelete = (id) => {
		const newBlogs = blogs.filter((blog) => blog.id !== id);
		setBlog(newBlogs);
	};

	return (
		<div className="Home">
			<BlogsList
				blogs={blogs}
				title="All Blogs!"
				handleDelete={handleDelete}
			/>
			<BlogsList
				blogs={blogs.filter((blog) => blog.author === "alireza")}
				title="Alireza's blogs!"
				handleDelete={handleDelete}
			/>
		</div>
	);
};

export default Home;
