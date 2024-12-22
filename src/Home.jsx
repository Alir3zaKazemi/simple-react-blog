import { useState, useEffect } from "react";
import BlogsList from "./BlogsList";

const Home = () => {
	let [blogs, setBlog] = useState(null);
	let [name, setName] = useState("ali");
	let [isLoading, setIsLoading] = useState(true);
	let [error, setError] = useState(null);

	const handleDelete = (id) => {
		const newBlogs = blogs.filter((blog) => blog.id !== id);
		setBlog(newBlogs);
	};

	useEffect(() => {
		setTimeout(() => {
			//here for just simulating loading, we just used set timeout
			fetch("http://localhost:8000/blogs")
				.then((res) => {
					if (!res.ok) {
						throw new Error("something wrong with fetching");
					}
					return res.json();
				})
				.then((data) => {
					setError(null);
					setBlog(data);
					setIsLoading(false);
				})
				.catch((err) => {
					setError(err.message);
					setIsLoading(false);
				});
		}, 2000);
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
			{error && <p>{error}</p>}
			{isLoading && <div>Loading ...</div>}
			{blogs && (
				<BlogsList
					blogs={blogs}
					title="All Blogs!"
					handleDelete={handleDelete}
				/>
			)}
			<div className="name-button-container">
				<button
					onClick={() => {
						changeName();
					}}
				>
					change name
				</button>
				<p>{name}</p>
			</div>
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
