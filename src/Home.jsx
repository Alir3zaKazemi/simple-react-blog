// import { useState } from "react";
import BlogsList from "./BlogsList";
import useFetch from "./useFetch";

const Home = () => {
	// let [name, setName] = useState("ali");
	let {
		data: blogs,
		isLoading,
		error,
		setData,
	} = useFetch("http://localhost:8000/blogs");

	const handleDelete = (id) => {
		const newBlogs = blogs.filter((blog) => blog.id !== id);
		setData(newBlogs);
	};

	// const changeName = () => {
	// 	if (name == "ali") {
	// 		setName("abol");
	// 	} else {
	// 		setName("ali");
	// 	}
	// };

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
			{/* <div className="name-button-container">
				<button
					onClick={() => {
						changeName();
					}}
				>
					change name
				</button>
				<p>{name}</p>
			</div> */}
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
