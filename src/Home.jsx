import { useState, useEffect } from "react";
import BlogsList from "./BlogsList";

const Home = () => {
	let [blogs, setBlog] = useState(null);

	const handleDelete = (id) => {
		const newBlogs = blogs.filter((blog) => blog.id !== id);
		setBlog(newBlogs);
	};

	let [name, setName] = useState("ali");

	useEffect(() => {
		fetch("http://localhost:8000/blogs")
			.then((res) => {
				return res.json();
			})
			.then((data) => setBlog(data));
	}, []);

	const changeName = () => {
		if (name == "ali") {
			setName("abol");
		} else {
			setName("ali");
		}
	};

	return (
		<div className="Home">
			{blogs && (
				<BlogsList
					blogs={blogs}
					title="All Blogs!"
					handleDelete={handleDelete}
				/>
			)}
			<button
				onClick={() => {
					changeName();
				}}
			>
				change name
			</button>
			<p>{name}</p>
			{blogs && (
				<BlogsList
					blogs={blogs.filter((blog) => blog.author === "alireza")}
					title="Alireza's blogs!"
					handleDelete={handleDelete}
				/>
			)}
		</div>
	);
};

export default Home;
